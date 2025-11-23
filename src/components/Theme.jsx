import React, { useState } from 'react'

const Theme = () => {
     const [themeToggle, setThemeToggle] = useState(false);

     const htmlelement = document.querySelector("html");
     // localStorage.theme = 'dark';

     // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     //      htmlelement.classList.add('dark')
     //      localStorage.theme = 'dark';
     // } else {
     //      htmlelement.classList.remove('dark')
     //      localStorage.theme = 'light';
     // }

     // if (localStorage.theme === 'dark')
     //      localStorage.theme = 'light';
     // else localStorage.theme = 'dark';

     const handleClick = () => {
          setThemeToggle(!themeToggle);
          if (themeToggle) {
               localStorage.theme = 'dark'
               htmlelement.classList.add('dark');

          } else {
               localStorage.theme = 'light'
               htmlelement.classList.remove('dark');
          }
     }

     return (
          <>
               <div className='fixed md:top-20 top-8 right-4 ' onClick={handleClick}>
                    <label className="bg-titleColor dark:bg-[#FAF9F6] flex gap-1 rounded-full items-center p-1 relative cursor-pointer border-2">
                         <i className={localStorage.theme === 'light' ? "bx bxs-moon text-h3 text-bodyColor" : "bx bxs-sun text-h3 font-black text-yellow-600"}></i>
                         {/* <i className={localStorage.theme === 'light' ? "bx bxs-moon text-h3 text-bodyColor" : "hidden "}></i>
                         <i className={localStorage.theme === 'dark' ? "bx bxs-sun text-h3 font-black text-yellow-600" : "hidden"}></i> */}
                    </label>
               </div>
          </>
     )
}

export default Theme