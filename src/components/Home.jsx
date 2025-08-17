// import React, { forwardRef } from 'react'
// import Photo from '../assets/avatar.png';
// import Resume from '../assets/visheshgaur (2).pdf'



// const Home = forwardRef((props, ref) => {

//      const AboutScroll = (e) => {
//           e.preventDefault();
//           props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
//      };
//      return (
//           <>
//                <section className=" w-full pt-8 md:pt-20 lg:pt-12 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode" ref={ref}>
//                     <div className="px-4 max-w-5xl mx-auto">
//                          <div className="flex flex-col lg:flex-row justify-center w-full pt-12 lg:pt-20 items-center mx-auto">

//                               {/* Social Media Section */}
//                               <div className='flex items-center lg:w-1/2 gap-0 lg:gap-12'>

//                                    <div className="w-8 sm:w-28 flex flex-col gap-8 w-18">
//                                         <a href="https://github.com/visheshgaur" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
//                                              <i className="uil uil-github-alt"></i>
//                                         </a>
//                                         <a href="https://www.linkedin.com/in/vishesh-gaur-74ab5a231/" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
//                                              <i className="uil uil-linkedin-alt"></i>
//                                         </a>
//                                         <a href="https://www.instagram.com/gaurvishesh999/" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
//                                              <i className="uil uil-instagram"></i>
//                                         </a>
//                                    </div>

//                                    {/* Profile Image Section */}
//                                    <div className="profile_image-section">
//                                         <img src={Photo} alt="Vishesh DP" className='profile-image h-64 sm:h-72 shadow-3xl mx-auto dark:shadow-white/20' />
//                                    </div>
//                               </div>


//                               {/* Hero Section */}

//                               <div className="lg:w-1/2 lg:pl-8 md:pl-20 lg:pl-24 mt-24">
//                                    <div className="text-center lg:text-left">
//                                         <h3 className="text-res-h3 sm:text-h3 font-normal mb-4 text-titleColor dark:text-titleColorDarkMode">Hey, I'm <strong>Vishesh</strong>. Nice to meet you.</h3>
//                                         <h1 className="text-res-big sm:text-h2 mb-4 text-titleColor dark:text-titleColorDarkMode">Full-Stack Developer | UI/UX Enthusiast </h1>
//                                         <p className="max-w-md text-titleColor dark:text-titleColorDarkMode">Creative designer and full-stack developer from India, passionate about coding from scratch and transforming ideas into interactive web experiences.
//                                         </p>
//                                         <a download='Vishesh_Resume.pdf' href={Resume} className="button button--flex bg-titleColor dark:bg-titleColorDarkMode space-x-2 my-10 text-containerColor dark:text-containerColorDarkMode">
//                                              <span>Get Resume</span>
//                                              <i className="uil uil-file-download text-xl"></i>
//                                         </a>
//                                    </div>
//                               </div>
//                          </div>
//                          <div className="hidden lg:block text-right mt-16">
//                               <a href="#about" className="button--flex  text-titleColor dark:text-titleColorDarkMode hover:text-titleColorDark" onClick={AboutScroll}>
//                                    <i className="uil uil-mouse-alt text-3xl md:text-4xl"></i>
//                                    <span className="text-lg font-medium mr-1 ml-0.5">Scroll Down</span>
//                                    <i className="uil uil-arrow-down text-lg md:text-xl"></i>
//                               </a>
//                          </div>
//                     </div>
//                </section>
//           </>
//      )
// })

// export default Home
import React, { forwardRef } from 'react';
import Photo from '../assets/avatar.avif';
import Resume from '../assets/visheshgaur (2).pdf';

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
