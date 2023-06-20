import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import { environment } from './environments/environment'

type Message = {
  message: string;
  sender: string;
  direction: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([{
    message: 'Hello, I am Torado!',
    sender: "Torado",
    direction: 'left'
  }])

  const [text, setText] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    setText('');
    const newMessage = { message: text, sender: 'User', direction: 'right' };

    const newMessages = [ ...messages, newMessage];
    setMessages(newMessages);

    // update our messages state
    processMsgToChatGTP(newMessages);
    // set a typing indicator (ChatGPT is typing)
    setTyping(true);

    // process message to chatGPT 

  };

  const processMsgToChatGTP = async (chatMessages: Message[]) => {
    const apiMsgArr = chatMessages.map((msg) => ({
      role: msg.sender === 'chatGPT' ? 'assistant' : 'user',
      content: msg.message
    }))

    // https://www.sitekick.ai/

    const systemMsg = {
      role: 'system',
      content: environment.MODEL_PROMPT
    }

    const apiReqBody = { "model" : "gpt-3.5-turbo", "messages": [ systemMsg, ...apiMsgArr ] };

    await fetch(environment.API_URL, {
      method : 'POST',
      headers: {
        "Authorization": "Bearer " + environment.API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiReqBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log('data.choices[0].message : ', data.choices[0].message);

      const { role , content } = data.choices[0].message;
      
      const newMsg = {...data.choices[0].message, message: content, sender: role, direction: 'left'}
      console.log('data : ', data);
      setMessages((pre) => ([...pre, newMsg]));
      setTyping(false);
      
    }).catch((err) => {
      console.log('err : ', err);
      
    })
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') handleSend();
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md">
          {/* Chat header */}
          <div className="border-b border-gray-300 p-4 flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-3"
              src={logo}
              alt="User Profile"
            />
            <h2 className="text-lg font-semibold text-gray-800">Torado</h2>
          </div>
          {/* Chat messages */}
          <div className="p-4 h-64 overflow-y-auto scrollbar-none">
            {/* Message bubbles */}
            <div className="flex flex-col">
              {
                messages.map((msg, i) => {
                  const lCont = "self-start bg-gray-200 rounded-lg p-2 max-w-max mb-2";
                  const rCont = "self-end bg-blue-500 rounded-lg p-2 max-w-max mb-2"
                  const lMsg = "text-sm text-gray-800";
                  const rMsg = "text-sm text-white";
                  return (
                    <div key={i} className={msg.direction === 'right' ? rCont : lCont}>
                    <p className={msg.direction === 'right' ? rMsg : lMsg}>
                      {msg.message}
                    </p>
                  </div>
                  )
                })
              }
              {
                typing && <div className="self-start bg-gray-200 rounded-lg p-2 max-w-max mb-2">
                <p className="text-sm text-gray-800">
                  Torado is typing...
                </p>
              </div>
              }
              {/* ... more messages */}
            </div>
          </div>
          {/* Chat input */}
          <div className="border-t border-gray-300 p-4 flex items-center">
            <input
              disabled={typing} onKeyDown={handleKeyDown}
              className="border border-gray-400 rounded-lg py-2 px-4 w-full mr-2"
              type="text" value={text} onChange={(e) => setText(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
