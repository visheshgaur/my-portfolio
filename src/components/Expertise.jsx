
import React, { forwardRef } from 'react';

const Expertise = forwardRef((props, ref) => {
  const frontend_skills_set = [
    { skill_name: 'Javascript', skill_level: 'Advance' },
    { skill_name: 'Reactjs', skill_level: 'Intermediate' },
    { skill_name: 'Nextjs', skill_level: 'Intermediate' },
    { skill_name: 'TailwindCSS', skill_level: 'Advance' },
    { skill_name: 'GSAP', skill_level: 'Advance' },
    { skill_name: 'Nodejs', skill_level: 'Intermediate' },
    { skill_name: 'Expressjs', skill_level: 'Intermediate' },
    { skill_name: 'MongoDB', skill_level: 'Intermediate' },
    { skill_name: 'Git', skill_level: 'Intermediate' },
    { skill_name: 'Postman', skill_level: 'Intermediate' },
    { skill_name: 'Vercel', skill_level: 'Intermediate' },
    {skill_name:"Wordpress",skill_level:"Advanced"}
  ];

  const design_skills_set = [
    { skill_name: 'Figma', skill_level: 'Advance' },
    { skill_name: 'UX', skill_level: 'Advance' },
    { skill_name: 'UI', skill_level: 'Advance' },
    { skill_name: 'Web', skill_level: 'Advance' },
    { skill_name: 'Webflow', skill_level: 'Intermediate' },
    { skill_name: 'Logos', skill_level: 'Intermediate' },
//     { skill_name: 'PhotoShop', skill_level: 'Basic' },
  ];

  return (
    <section
      ref={ref}
      className="pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode"
    >
      <div className="px-6 max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-titleColor dark:text-titleColorDarkMode text-center pb-2 tracking-tight">
          My Expertise Room
        </h2>
        <span className="block text-center text-base mb-12 text-titleColor dark:text-titleColorDarkMode opacity-80">
          What I Technically Offer
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Fullstack Development */}
          <div className="group relative bg-containerColor dark:bg-containerColorDarkMode rounded-3xl p-8 sm:p-10 border border-transparent bg-clip-padding backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-primaryColor/30">
            <div className="flex items-center gap-4 mb-6">
              <i className="uil uil-brackets-curly text-h1 text-primaryColor dark:text-secondaryColor animate-pulse"></i>
              <h3 className="text-xl font-semibold text-titleColor dark:text-titleColorDarkMode">
                Fullstack Development Stack
              </h3>
            </div>
            <p className="text-sm sm:text-base mb-8 leading-relaxed text-titleColor dark:text-titleColorDarkMode">
              I specialize in building applications with React and Next.js, with a strong appreciation for the simplicity and predictability of one-way data flow.<br></br> I’ve successfully launched numerous single-page applications using these technologies.
              
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {frontend_skills_set.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2">
                    <i className="uil uil-check-circle text-lg text-primaryColor dark:text-secondaryColor"></i>
                    <h4 className="font-medium text-sm text-titleColor dark:text-titleColorDarkMode">
                      {skill.skill_name}
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 mt-1 rounded-full bg-primaryColor/10 dark:bg-secondaryColor/10 text-[10px] text-primaryColor dark:text-secondaryColor">
                    {skill.skill_level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Designer */}
          <div className="group relative bg-containerColor dark:bg-containerColorDarkMode rounded-3xl p-8 sm:p-10 border border-transparent bg-clip-padding backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-secondaryColor/30">
            <div className="flex items-center gap-4 mb-6">
              <i className="uil uil-transaction text-h1 text-secondaryColor dark:text-primaryColor animate-pulse"></i>
              <h3 className="text-xl font-semibold text-titleColor dark:text-titleColorDarkMode">
                Designer
              </h3>
            </div>
            <p className="text-sm sm:text-base mb-8 leading-relaxed text-titleColor dark:text-titleColorDarkMode">
             I value simple content structures, clean design patterns, and thoughtful interactions.
<br></br>My mission is to craft unique digital experiences for brands that deserve to make a lasting impact.
<br></br>My experience spans design, digital media, marketing, and brand strategy, as well as full-stack development.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {design_skills_set.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2">
                    <i className="uil uil-check-circle text-lg text-secondaryColor dark:text-primaryColor"></i>
                    <h4 className="font-medium text-sm text-titleColor dark:text-titleColorDarkMode">
                      {skill.skill_name}
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 mt-1 rounded-full bg-secondaryColor/10 dark:bg-primaryColor/10 text-[10px] text-secondaryColor dark:text-primaryColor">
                    {skill.skill_level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Expertise;
