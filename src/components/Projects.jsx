// 
import React, { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projects = {
    1: {
      heading: "TaskOne : A Task Management Application",
      "description-1":
        "A task management app where admins can assign tasks to employees, and employees can accept, reject, or complete them.",
      "description-2":
        "Built with React.js, implemented authentication using JSON data, and managed sessions using localStorage.",
      "tech-used": " React.js | JSON | LocalStorage",
      "demo-link": "https://taskone23.netlify.app/",
      "github-link": "https://github.com/visheshgaur/TaskOne",
    },
    2: {
      heading: "Currency Converter: Real-time Exchange Rates",
      "description-1":
        "A simple and fast currency converter that allows users to convert between different currencies instantly.",
      "description-2":
        "Built with React.js and integrated with a currency exchange API to fetch real-time rates.",
      "tech-used": " React.js | API | CSS",
      "demo-link": "https://visheshcurrencyconvertor.netlify.app/",
      "github-link": "https://github.com/visheshgaur/Currency-Convertor",
    },
    3: {
      heading: "Vishesh: My Personal Portfolio Website.",
      "description-1":
        "A place where one can find all professional details about me.",
      "tech-used": " Reactjs | TailwindCSS ",
      "github-link": "https://github.com/visheshgaur/my-portfolio",
    },
    4: {
      heading: "Omnifood: A Modern Food Delivery Landing Page",
      "description-1":
        "A fully responsive static website built to sharpen fundamentals of web development.",
      "description-2":
        "Designed using only HTML and CSS to practice layout building, responsive design, and clean UI structure.",
      "tech-used": " HTML | CSS",
      "demo-link": "https://omnifooodssss.netlify.app/",
      "github-link": "https://github.com/visheshgaur/omnifood",
    },
    5: {
      heading: "TODO LIST: A Simple Task Manager",
      "description-1":
        "A task management application where users can add, update, and delete tasks with an intuitive UI.",
      "description-2":
        "Implemented persistent data storage using browser Local Storage for saving tasks even after reload.",
      "tech-used": "JavaScript | ReactJS | Local Storage | CSS",
      "demo-link": "https://visheshtodolist.netlify.app/",
      "github-link": "https://github.com/visheshgaur/Todo-List",
    },
    6: {
      heading: "jobPortal: A Job Portal for Seamless Hiring [ONGOING]",
      "description-1":
        "A full-stack job portal where employers can post jobs and candidates can apply with authentication and role-based access.",
      "description-2":
        "Implemented using React for frontend, Node.js & Express for backend, and MongoDB for database management.",
      "tech-used": "JavaScript | ReactJS | NodeJS | ExpressJS | MongoDB",
    },
  };

  return (
    <section
      ref={ref}
      className="pt-16 pb-20 bg-gradient-to-b from-bodyColor/95 to-bodyColorDarkMode/95 dark:from-bodyColorDarkMode dark:to-bodyColor relative z-10"
    >
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center pb-2 text-titleColor dark:text-titleColorDarkMode tracking-wide uppercase">
          Projects
        </h2>
        <span className="text-center block text-lg mb-12 text-gray-500 dark:text-gray-400 italic">
          What I Delivered 🚀
        </span>

        <div className="service_container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:p-6 py-6">
          {Object.values(projects).map((project, index) => (
            <div
              key={index}
              className="group relative border border-black/10 rounded-xl bg-white dark:bg-gray-900 px-6 py-8 shadow-md 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl rounded-xl transition-all duration-500"></div>

              <h3 className="relative z-10 service_title text-lg mb-4 font-bold uppercase text-titleColor dark:text-titleColorDarkMode group-hover:text-purple-600 transition-colors duration-300">
                {project.heading}
              </h3>

              <ul className="relative z-10 project_description-list list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-3">
                {project["description-1"] && (
                  <li>{project["description-1"]}</li>
                )}
                {project["description-2"] && (
                  <li>{project["description-2"]}</li>
                )}
              </ul>

              <div className="relative z-10 flex items-center py-4">
                <h3 className="tech_used text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition duration-300">
                  {project["tech-used"]}
                </h3>
              </div>

              <div className="relative z-10 flex items-center pt-2 justify-between">
                {project["demo-link"] && (
                  <a
                    href={project["demo-link"]}
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 py-1 px-4 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
                {project["github-link"] && (
                  <a
                    href={project["github-link"]}
                    className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 py-1 px-4 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* More Projects CTA */}
          <div className="service_content border border-dashed border-black/20 rounded-xl bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-black px-6 py-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <h3 className="text-lg mb-4 font-bold uppercase text-gray-900 dark:text-white">
              Find out more projects
            </h3>
            <a
              href="https://github.com/visheshgaur?tab=repositories"
              className="inline-flex items-center space-x-2 font-semibold text-purple-700 dark:text-purple-400 hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <span>Check Out Here</span>
              <i className="uil uil-arrow-right text-xl"></i>
              <i className="uil uil-github-alt text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
