import React, { forwardRef } from 'react';
import Photo from '../assets/avatar2.avif';

const stats = [
  {
    icon: "uil-award-alt",
    title: "Experience",
    desc: "1+ Years",
  },
  {
    icon: "uil-bag-alt",
    title: "Completed",
    desc: "5+ Projects",
  },
  {
    icon: "uil-headphones-alt",
    title: "Support",
    desc: "Online 24/7",
  },
];

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20 
                 bg-bodyColor dark:bg-bodyColorDarkMode 
                 min-h-[80vh] flex items-center"
    >
      <div className="px-4 max-w-6xl mx-auto w-full">
        
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-titleColor dark:text-titleColorDarkMode 
                       text-center pb-2 tracking-tight">
          About Me
        </h2>
        <span className="block text-center text-base mb-12 text-titleColor 
                         dark:text-titleColorDarkMode opacity-80">
          My Introduction
        </span>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-transparent">
          
          {/* Photo */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <img
                src={Photo}
                alt="main_image"
                className="h-56 w-56 lg:h-[325px] lg:w-[350px] 
                           object-cover object-top rounded-3xl shadow-3xl
                           group-hover:scale-105 group-hover:shadow-2xl 
                           transition-all duration-500 ease-out"
              />
              {/* Glass Effect */}
              <div className="absolute inset-0 rounded-3xl 
                              bg-white/40 dark:bg-titleColorDark/20 
                              backdrop-blur-md opacity-0 
                              group-hover:opacity-80 transition-all 
                              duration-700 pointer-events-none"></div>
              {/* Gradient ring */}
              <div className="absolute -inset-2 rounded-3xl 
                              bg-gradient-to-tr from-primaryColor/30 
                              via-secondaryColor/30 to-titleColor/10 
                              blur-xl opacity-60"></div>
            </div>
          </div>

          {/* Info + Stats */}
          <div className="lg:pl-8 flex flex-col justify-center">
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 mx-auto lg:mx-0 max-w-md">
              {stats.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="relative bg-white/80 dark:bg-containerColorDarkMode/70 
                             backdrop-blur-xl border border-primaryColor/10 
                             dark:border-secondaryColor/10 rounded-2xl 
                             text-center py-5 px-3 shadow-xl group 
                             hover:-translate-y-2 hover:shadow-2xl 
                             transition-all duration-350 ease"
                  style={{
                    boxShadow:
                      "0 6px 40px -10px var(--tw-shadow-color,rgba(99,102,241,0.15))",
                  }}
                >
                  <i
                    className={`uil ${icon} text-3xl mb-2 text-primaryColor dark:text-secondaryColor`}
                  ></i>
                  <h3 className="text-small font-medium mb-1 text-titleColor dark:text-titleColorDarkMode">
                    {title}
                  </h3>
                  <span className="text-xs text-titleColor dark:text-titleColorDarkMode">
                    {desc}
                  </span>
                  <span className="block mt-2 mx-auto h-1 w-6 
                                   bg-gradient-to-r from-primaryColor 
                                   to-secondaryColor rounded-full 
                                   scale-x-0 group-hover:scale-x-100 
                                   transition-transform duration-300"></span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="mb-5 px-0 sm:px-8 lg:px-0 lg:pr-5 
                          text-titleColor dark:text-titleColorDarkMode 
                          text-md leading-relaxed max-w-lg mx-auto lg:mx-0">
              <strong className="text-primaryColor">Fullstack Developer</strong> — Building fast, scalable, and user-friendly web applications with modern best practices. Over the past year as a freelance developer, I’ve delivered end-to-end projects — from UI design to deploying production-ready backends.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start w-full">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vishesh-gaur-74ab5a231/"
                target="_blank"
                rel="noreferrer"
                className="relative group inline-flex justify-center items-center gap-2 
                           px-7 py-3 rounded-full font-semibold text-white text-center
                           bg-gradient-to-r from-primaryColor via-secondaryColor to-primaryColor 
                           bg-[length:200%_200%] animate-gradient-move shadow-lg
                           hover:shadow-xl hover:scale-105 transition-all duration-300 
                           w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  LinkedIn <i className="uil uil-linkedin-alt text-xl"></i>
                </span>
                <span className="absolute inset-0 rounded-full 
                                 ring-2 ring-white/20 opacity-0 
                                 group-hover:opacity-100 blur-sm 
                                 transition-opacity duration-300"></span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/visheshgaur"
                target="_blank"
                rel="noreferrer"
                className="relative group inline-flex justify-center items-center gap-2 
                           px-7 py-3 rounded-full font-semibold text-white text-center
                           bg-gradient-to-r from-secondaryColor via-primaryColor to-secondaryColor 
                           bg-[length:200%_200%] animate-gradient-move shadow-lg
                           hover:shadow-xl hover:scale-105 transition-all duration-300 
                           w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  GitHub <i className="uil uil-github-alt text-xl"></i>
                </span>
                <span className="absolute inset-0 rounded-full 
                                 ring-2 ring-white/20 opacity-0 
                                 group-hover:opacity-100 blur-sm 
                                 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
