// import React from 'react'

// const LandingPage = () => {
//   return (
//     <>
//     <nav class="bg-blue-500 px-4 py-2 flex items-center justify-between">
//   <div class="text-white font-bold text-xl">Coding Classes</div>
//   <ul class="flex items-center">
//     <li class="mx-2"><a href="#" class="text-white hover:text-white">Home</a></li>
//     <li class="mx-2"><a href="#" class="text-white hover:text-white">About</a></li>
//     <li class="mx-2"><a href="#" class="text-white hover:text-white">Classes</a></li>
//     <li class="mx-2"><a href="#" class="text-white hover:text-white">Contact</a></li>
//   </ul>
// </nav>

// <header class="bg-blue-500 py-12">
//   <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//     <h1 class="text-4xl font-extrabold text-white">Learn to Code with the Best</h1>
//     <p class="mt-4 text-xl text-white">We provide coaching for all levels of coding, whether you're a beginner or ready to tackle advanced concepts.</p>
//     <a href="#" class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-500 hover:bg-blue-50">Join a Class</a>
//   </div>
// </header>

// <section class="py-16 px-4 text-center">
//   <div class="max-w-5xl mx-auto">
//     <h2 class="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
//     <p class="mt-4 text-lg text-gray-500">There are plenty of options out there for coding classes. Here's why we're the best.</p>
//     <div class="mt-12">
//       <div class="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
//         <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
//           <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
//             <div>
//               <span class="text-4xl font-extrabold text-blue-500">1.</span>
//             </div>
//             <h3 class="mt-6 text-xl font-bold text-gray-900 uppercase tracking-wider">Expert Instructors</h3>
//             <p class="mt-6 text-base text-gray-500">Our instructors have years of experience teaching coding and are experts in their fields.</p>
//           </div>
//         </div>

//         <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
//           <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
//             <div>
//               <span class="text-4xl font-extrabold text-blue-500">2.</span>
//             </div>
//             <h3 class="mt-6 text-xl font-bold text-gray-900 uppercase tracking-wider">Hands-On Learning</h3>
//             <p class="mt-6 text-base text-gray-500">We believe that the best way to learn coding is by doing. Our classes offer plenty of opportunities for hands-on learning.</p>
//           </div>
//         </div>

//         <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
//           <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
//             <div>
//               <span class="text-4xl font-extrabold text-blue-500">3.</span>
//             </div>
//             <h3 class="mt-6 text-xl font-bold text-gray-900 uppercase tracking-wider">Flexible Scheduling</h3>
//             <p class="mt-6 text-base text-gray-500">We offer classes at a variety of times to fit your busy schedule.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
//   <div class="max-w-5xl mx-auto">
//     <h2 class="text-3xl font-extrabold text-gray-900">Our Classes</h2>
//     <p class="mt-4 text-lg text-gray-500">We offer classes in a variety of programming languages and skill levels. Take a look at what we have to offer.</p>
//     <div class="mt-12">
//       <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
//           <div class="flex-1 flex flex-col p-8">
//             <h3 class="mt-4 font-bold text-xl">Beginner Python</h3>
//             <p class="mt-2 text-gray-600">Learn the basics of programming with Python.</p>
//             <p class="mt-5 text-blue-500 text-lg font-bold">$299</p>
//             <a href="#" class="mt-8 bg-blue-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-blue-600">Sign Up</a>
//           </div>
//         </li>

//         <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
//           <div class="flex-1 flex flex-col p-8">
//             <h3 class="mt-4 font-bold text-xl">Intermediate JavaScript</h3>
//             <p class="mt-2 text-gray-600">Take your JavaScript skills to the next level.</p>
//             <p class="mt-5 text-blue-500 text-lg font-bold">$399</p>
//             <a href="#" class="mt-8 bg-blue-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-blue-600">Sign Up</a>
//           </div>
//         </li>

//         <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
//           <div class="flex-1 flex flex-col p-8">
//             <h3 class="mt-4 font-bold text-xl">Advanced React</h3>
//             <p class="mt-2 text-gray-600">Take your React skills to the next level.</p>
//             <p class="mt-5 text-blue-500 text-lg font-bold">$499</p>
//             <a href="#" class="mt-8 bg-blue-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-blue-600">Sign Up</a>
//           </div>
//         </li>

//         <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
//           <div class="flex-1 flex flex-col p-8">
//             <h3 class="mt-4 font-bold text-xl">iOS Development</h3>
//             <p class="mt-2 text-gray-600">Learn how to develop iOS apps.</p>
//             <p class="mt-5 text-blue-500 text-lg font-bold">$599</p>
//             <a href="#" class="mt-8 bg-blue-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-blue-600">Sign Up</a>
//           </div>
//         </li>
//       </ul>
//     </div>
//   </div>
// </section>

// <section class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//   <div class="max-w-4xl mx-auto">
//     <h2 class="text-3xl font-extrabold text-gray-900">Contact Us</h2>
//     <p class="mt-4 text-lg text-gray-500">Have a question or want to sign up for a class? Fill out the form below and we'll get back to you as soon as we can.</p>
//     <form action="#" method="POST" class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//       <div>
//         <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
//         <div class="mt-1">
//           <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm" />
//         </div>
//       </div>
//       <div>
//         <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
//         <div class="mt-1">
//           <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm" />

//         </div>
//       </div>
//       <div>
//         <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
//         <div class="mt-1">
//           <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm" />
//         </div>
//       </div>
//       <div>
//         <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
//         <div class="mt-1">
//           <input type="text" name="phone" id="phone" autocomplete="tel" class="py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm" />
//         </div>
//       </div>
//       <div class="sm:col-span-2">
//         <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
//         <div class="mt-1">
//           <textarea id="message" name="message" rows="4" class="py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm"></textarea>
//         </div>
//       </div>
//       <div class="sm:col-span-2">
//         <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//           Send message
//         </button>
//       </div>
//     </form>
//   </div>
// </section>
//     </>
//   )
// }

// export default LandingPage