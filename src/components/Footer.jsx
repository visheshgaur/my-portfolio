import React from 'react'

const Footer = ({ aboutRef, projectsRef }) => {
     const AboutScroll = (e) => {
          e.preventDefault();
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
     };
     const ProjectsScroll = (e) => {
          e.preventDefault();
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
     };
     return (
          <>
               <footer className='bg-containerColor border-t-2 border-solid border-black border-opacity-10 bg-bodyColor dark:bg-bodyColorDarkMode'>
                    <div className="pt-4 pb-16 md:py-6">
                         <h1 className=" text-titleColor dark:text-titleColorDarkMode text-center mb-2 text-h2">Vishesh Gaur</h1>
                         <ul className="flex justify-center gap-6 mb-6">
                              <li>
                                   <a href="#first" className=" text-titleColor dark:text-titleColorDarkMode hover:text-titleColorDark" onClick={AboutScroll}> About </a>
                              </li>
                              <li>
                                   <a href="#first" className=" text-titleColor dark:text-titleColorDarkMode hover:text-titleColorDark" onClick={ProjectsScroll}> Projects </a>
                              </li>
                         </ul>
                         <div className="flex justify-center gap-5">
                              <a href="https://github.com/visheshgaur" className="text-xl md:text-2xl text-titleColor dark:text-titleColorDarkMode hover:text-titleColorDark dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
                                   <i className="uil uil-github-alt"></i>
                              </a>
                              <a href="https://www.linkedin.com/in/vishesh-gaur-74ab5a231/" className="text-xl md:text-2xl text-titleColor dark:text-titleColorDarkMode hover:text-titleColorDark dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
                                   <i className="uil uil-linkedin-alt"></i>
                              </a>
                              <a href="https://www.instagram.com/gaurvishesh999/" className="text-xl md:text-2xl text-titleColor dark:text-titleColorDarkMode hover:text-titleColorDark dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
                                   <i className="uil uil-instagram"></i>
                              </a>
                              
                         </div>
                         <div className="block mt-8 text-titleColor dark:text-titleColorDarkMode text-center text-smaller"> Copyright &#169; 2026 Vishesh Gaur All rights Reserved. </div>
                    </div>
               </footer>
          </>
     )
}

export default Footer