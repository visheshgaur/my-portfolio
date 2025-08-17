// import React, { forwardRef, useRef } from 'react';
// import emailjs from 'emailjs-com';

// const Contact = forwardRef((props, ref) => {
//   const formRef = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(() => {
//         alert('✅ Message sent successfully!');
//         formRef.current.reset();
//       })
//       .catch(() => {
//         alert('❌ Failed to send message. Please try again.');
//       });
//   };

//   return (
//     <section
//       className="w-full pt-20 pb-16 bg-gradient-to-b from-indigo-50 via-white to-indigo-100
//                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500"
//       ref={ref}
//     >
//       <div className="px-4 max-w-full xsm:max-w-5xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent
//                        bg-gradient-to-r from-indigo-500 to-purple-600 mb-2">
//           Contact Me
//         </h2>
//         <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8">
//           Let’s work together on your next project 🚀
//         </p>

//         <div className="flex flex-col md:flex-row justify-center lg:gap-20 pb-12">
//           {/* Contact Info Cards */}
//           <div className="w-full md:w-2/6 lg:w-1/2 space-y-6">
//             {[
//               {
//                 icon: 'uil-fast-mail',
//                 title: 'Email',
//                 info: 'vishesh999.dev@gmail.com',
//                 link: 'mailto:vishesh999.dev@gmail.com',
//                 linkText: 'Write Me',
//               },
//               {
//                 icon: 'uil-linkedin-alt',
//                 title: 'LinkedIn',
//                 info: '@Vishesh',
//                 link: 'https://www.linkedin.com/in/vishesh-gaur-74ab5a231/',
//                 linkText: 'Connect',
//               },
//               {
//                 icon: 'uil-whatsapp',
//                 title: 'Whatsapp',
//                 info: '+91 9760559908',
//                 link: `https://api.whatsapp.com/send?phone=919760559908&text=Hey`,
//                 linkText: 'Write Me',
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center
//                            border border-gray-200 dark:border-gray-600 shadow-md
//                            hover:shadow-2xl transform hover:-translate-y-2
//                            transition-all duration-300"
//               >
//                 <i
//                   className={`${item.icon} text-indigo-500 group-hover:text-purple-500
//                               text-5xl mb-3 transition-colors`}
//                 ></i>
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-gray-500 dark:text-gray-400">{item.info}</p>
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center mt-3 text-indigo-600 group-hover:text-purple-500
//                              font-medium"
//                 >
//                   {item.linkText}
//                   <i className="uil uil-arrow-right ml-1"></i>
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* Contact Form */}
//           <div className="w-full md:w-4/6 lg:w-1/2 mt-10 md:mt-0">
//             <form
//               ref={formRef}
//               onSubmit={sendEmail}
//               className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg
//                          border border-gray-200 dark:border-gray-600 space-y-6"
//             >
//               {[
//                 { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name' },
//                 { label: 'Email', name: 'email', type: 'email', placeholder: 'Your Email' },
//               ].map((field, idx) => (
//                 <div key={idx}>
//                   <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//                     {field.label}
//                   </label>
//                   <input
//                     type={field.type}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     required
//                     className="w-full rounded-lg border-gray-300 dark:border-gray-600
//                                focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:border-purple-400
//                                dark:bg-gray-700 dark:text-white p-3 transition-all"
//                   />
//                 </div>
//               ))}

//               <div>
//                 <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//                   Message
//                 </label>
//                 <textarea
//                   name="project"
//                   rows="4"
//                   placeholder="Write your project..."
//                   required
//                   className="w-full rounded-lg border-gray-300 dark:border-gray-600
//                              focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:border-purple-400
//                              dark:bg-gray-700 dark:text-white p-3 resize-none transition-all"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600
//                            text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02]
//                            transform transition-all focus:outline-none focus:ring-2 focus:ring-indigo-300
//                            animate-pulse"
//               >
//                 Send Message ✉️
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// });

// export default Contact;

import React, { forwardRef, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Contact = forwardRef((props, ref) => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus(null), 4000); // Hide animation after 4 seconds
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section
      className="w-full pt-20 pb-16 bg-gradient-to-b from-indigo-50 via-white to-indigo-100
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500"
      ref={ref}
    >
      <div className="px-4 max-w-full xsm:max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl font-extrabold text-center bg-clip-text text-transparent
                       bg-gradient-to-r from-indigo-500 to-purple-600 mb-2"
        >
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8">
          Let’s work together on your next project 🚀
        </p>

        <div className="flex flex-col md:flex-row justify-center lg:gap-20 pb-12">
          {/* Contact Form */}
          <div className="w-full md:w-4/6 lg:w-1/2 mx-auto">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg
                         border border-gray-200 dark:border-gray-600 space-y-6 relative"
            >
              {/* Success Animation Overlay */}
              {status === "success" && (
                <div
                  className="absolute inset-0 flex items-center justify-center
                                bg-white/80 dark:bg-black/60 rounded-2xl z-10"
                >
                  <DotLottieReact
                    src="https://lottie.host/188effcb-d39c-4047-9a72-a5f32f395100/BeC7mDWfrA.lottie"
                    loop={false}
                    autoplay
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              )}
              {status === "error" && (
                <div
                  className="absolute inset-0 flex items-center justify-center
                  bg-white/80 dark:bg-black/60 rounded-2xl z-10"
                >
                  <DotLottieReact
                    src="https://lottie.host/dc2d5fd5-d1a4-454d-91cd-76cd13b745e0/IEKamQ8M8V.lottie"
                    loop={false}
                    autoplay
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              )}

              {/* Form Fields */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border-gray-300 dark:border-gray-600
                             focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:border-purple-400
                             dark:bg-gray-700 dark:text-white p-3 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg border-gray-300 dark:border-gray-600
                             focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:border-purple-400
                             dark:bg-gray-700 dark:text-white p-3 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="project"
                  rows="4"
                  placeholder="Write your project..."
                  required
                  className="w-full rounded-lg border-gray-300 dark:border-gray-600
                             focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:border-purple-400
                             dark:bg-gray-700 dark:text-white p-3 resize-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status !== null}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600
                           text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02]
                           transform transition-all focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
