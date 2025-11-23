import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Header = ({
  aboutRef,
  expertiseRef,
  homeRef,
  thoughtsRef,
  projectsRef,
  contactRef,
}) => {
  const [toggle, setToggle] = useState(false);
  const [active_tab, setActive_tab] = useState("#home");

  const HomeScroll = (e) => {
    e.preventDefault();
    homeRef.current.scrollIntoView({ behavior: "smooth" });
    setToggle(false);
    setActive_tab("#home");
  };
  const AboutScroll = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setToggle(false);
    setActive_tab("#about");
  };
  const ExpertiseScroll = (e) => {
    e.preventDefault();
    expertiseRef.current.scrollIntoView({ behavior: "smooth" });
    setToggle(false);
    setActive_tab("#expertise");
  };
  const ThoughtsScroll = (e) => {
    e.preventDefault();
    thoughtsRef.current.scrollIntoView({ behavior: "smooth" });
    setToggle(false);
    setActive_tab("#thoughts");
  };
  const ProjectsScroll = (e) => {
    e.preventDefault();
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
    setToggle(false);
    setActive_tab("#projects");
  };
  const ContactScroll = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setToggle(false);
    setActive_tab("#connect");
  };

  return (
    <>
      <header className="w-full h-10 md:h-16 fixed bottom-0 md:top-0 md:left-0 bg-containerColor dark:bg-containerColorDarkMode shadow-md z-50">
        <nav className="px-4 xsm:px-6 max-w-6xl h-10 md:h-16 mx-auto flex justify-between items-center gap-x-4">
          <div className="flex items-center">
  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center">
    <DotLottieReact
      src="https://lottie.host/d7f9fc76-56c8-4eb0-a78e-605e002c19f0/V4TrrgWRiC.lottie"
      loop
      autoplay
    />
  </div>
  <a
    href="./"
    className="ml-2 md:ml-4 text-titleColor dark:text-titleColorDarkMode font-medium text-lg md:text-2xl"
  >
    Vishesh
  </a>
</div>
          <div
            className={
              toggle
                ? "nav_menu show_menu bg-containerColor dark:bg-containerColorDarkMode"
                : "nav_menu bg-containerColor dark:bg-containerColorDarkMode"
            }
          >
               

            <ul
              className="grid grid-cols-3 gap-x-0 gap-8 md:flex md:gap-x-8 items-center"
              id="ul"
            >
              <li
                className={
                  active_tab === "#home"
                    ? "border-t-2 border-black dark:border-white"
                    : ""
                }
              >
                <a
                  href="#home"
                  className="btn active flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode"
                  onClick={HomeScroll}
                >
                  <i className="uil uil-estate block text-xl md:hidden"></i>{" "}
                  Home
                </a>
              </li>
              <li
                className={
                  active_tab === "#about"
                    ? "border-t-2 border-black dark:border-white"
                    : ""
                }
              >
                <a
                  href="#skills"
                  className="btn flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode"
                  onClick={AboutScroll}
                >
                  <i className="uil uil-file-alt nav_icon block text-xl md:hidden"></i>{" "}
                  About
                </a>
              </li>
              <li
                className={
                  active_tab === "#expertise"
                    ? "border-t-2 border-black dark:border-white"
                    : ""
                }
              >
                <a
                  href="#expertise"
                  className="btn flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode"
                  onClick={ExpertiseScroll}
                >
                  <i className="uil uil-file-alt nav_icon block text-xl md:hidden"></i>{" "}
                  Expertise
                </a>
              </li>

              <li
                className={
                  active_tab === "#projects"
                    ? "border-t-2 border-black dark:border-white"
                    : ""
                }
              >
                <a
                  href="#projects"
                  className="btn flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode"
                  onClick={ProjectsScroll}
                >
                  <i className="uil uil-scenery block text-xl md:hidden"></i>{" "}
                  Projects
                </a>
              </li>
              <li
                className={
                  active_tab === "#thoughts"
                    ? "border-t-2 border-black dark:border-white"
                    : ""
                }
              >
                <a
                  href="#thoughts"
                  className="btn flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode"
                  onClick={ThoughtsScroll}
                >
                  <i className="uil uil-briefcase-alt block text-xl md:hidden"></i>{" "}
                  Thoughts
                </a>
              </li>
              <li className={active_tab === "#connect" ? "" : ""}>
                <a
                  href="#contact"
                  className="inline-block bg-titleColor dark:bg-titleColorDarkMode text-containerColor dark:text-containerColorDarkMode p-2 rounded-lg font-bold hover:bg-titleColorDark dark:hover:bg-titleColorDarkDarkMode flex flex-col items-center text-small"
                  onClick={ContactScroll}
                >
                  <i className="uil uil-message nav_icon block text-xl md:hidden"></i>{" "}
                  Connect
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times absolute right-5 bottom-2 text-2xl hover:text-titleColorDark block md:hidden text-titleColor dark:text-titleColorDarkMode"
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
          <div
            className="md:hidden text-lg pointer text-titleColor font-medium block"
            onClick={() => setToggle(!toggle)}
          >
            <i className="uil uil-apps text-titleColor dark:text-titleColorDarkMode"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
