
import React, { forwardRef } from 'react';
import Photo from '../assets/avatar.avif';
import Resume from '../assets/visheshResume.pdf';

const Home = forwardRef((props, ref) => {
  const AboutScroll = (e) => {
    e.preventDefault();
    props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex items-center bg-gradient-to-b from-bodyColor to-bodyColor/90 dark:from-bodyColorDarkMode dark:to-bodyColorDarkMode pt-8 md:pt-20 lg:pt-12 pb-12"
    >
      
      <div className="px-4 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Section — Social + Photo */}
        <div className="flex items-center gap-10 lg:gap-16">
          
          {/* Social Icons */}
          <div className="flex flex-col items-center gap-6">
            {[
              { href: "https://github.com/visheshgaur", icon: "uil-github-alt" },
              { href: "https://www.linkedin.com/in/vishesh-gaur-74ab5a231/", icon: "uil-linkedin-alt" },
              { href: "https://www.instagram.com/gaurvishesh999/", icon: "uil-instagram" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-2xl md:text-3xl text-titleColor dark:text-titleColorDarkMode hover:scale-125 hover:text-primaryColor transition-all duration-300"
              >
                <i className={`uil ${social.icon}`}></i>
              </a>
            ))}
          </div>

          {/* Profile Image */}
          <div className="relative group">
            <img
              src={Photo}
              alt="Vishesh"
              className="h-64 sm:h-72 rounded-full shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primaryColor/20 to-secondaryColor/20 opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
          </div>
        </div>

        {/* Right Section — Intro Text */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 mb-3">
            Hey, I'm <span className="font-bold text-primaryColor">Vishesh</span>. Nice to meet you.
          </h3>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight text-titleColor dark:text-titleColorDarkMode">
            Full-Stack Developer | UI/UX Enthusiast
          </h1>
          <p className="max-w-lg mx-auto lg:mx-0 mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            Creative designer and developer from India, passionate about transforming ideas into interactive web experiences.
          </p>

          {/* Resume Button */}
          <a
  download="Vishesh_Resume.pdf"
  href={Resume}
  className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-white overflow-hidden group"
>
  <span className="relative z-10 flex items-center gap-2">
    Get Resume
    <i className="uil uil-file-download text-xl"></i>
  </span>

  {/* Background Gradient */}
  <span className="absolute inset-0 bg-gradient-to-r from-primaryColor via-secondaryColor to-primaryColor bg-[length:200%_200%] animate-gradient-move transition-all duration-500 rounded-full"></span>

  {/* Glow Ring */}
  <span className="absolute inset-0 rounded-full ring-2 ring-white/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
</a>

        </div>
      </div>

      {/* Scroll Down */}
      <div className="hidden lg:block absolute bottom-8 right-10 animate-bounce">
        <a
          href="#about"
          onClick={AboutScroll}
          className="flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-primaryColor transition-all"
        >
          <i className="uil uil-mouse-alt text-3xl"></i>
          <span className="text-lg">Scroll Down</span>
          <i className="uil uil-arrow-down text-xl"></i>
        </a>
      </div>
    </section>
  );
});

export default Home;
