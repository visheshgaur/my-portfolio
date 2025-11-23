import React from 'react'

const ScrollUp = ({ homeRef }) => {
     window.onscroll = function () {
          const scrollUp = document.querySelector(".scroll_up");
          if (this.scrollY > 600) {
               scrollUp.classList.add("show");
          }
          else {
               scrollUp.classList.remove('show');
          }
     }
     const HomeScroll = (e) => {
          e.preventDefault();
          homeRef.current.scrollIntoView({ behavior: "smooth" })
     }
     return (
          <>
               <a href='#scroll' className="scroll_up fixed right-10 bg-titleColor opacity-80 py-1.5 px-2 rounded-md hover:bg-titleColorDarkMode text-containerColor hover:text-containerColorDarkMode" onClick={HomeScroll}>
                    <i className="uil uil-arrow-up text-2xl"></i>
               </a>
          </>
     )
}

export default ScrollUp