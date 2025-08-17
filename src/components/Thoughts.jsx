import React from "react";

const Thoughts = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
          Thoughts
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Welcome to my Thoughts section — a space where I share insights,
          reflections, and ideas from my journey as a developer and lifelong
          learner. Here, I write about the challenges and breakthroughs I
          encounter, lessons from projects, and emerging trends in technology.
          Whether it’s about coding best practices, productivity hacks, or new
          tools I’m exploring, I aim to provide honest and actionable thoughts
          that spark curiosity and invite conversation.
        </p>
      </div>

      {/* Thought cards */}
      <div className="max-w-6xl mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {[
          {
            title: "Why Simplicity Wins in Code",
            desc: "Clean, readable code beats clever complexity every time. Here's why...",
            link: "https://dev.to/doozieakshay/the-power-of-simplicity-a-forgotten-coding-principle-4abf",
          },
          {
            title: "React Performance Tips",
            desc: "Small tweaks that can make a big difference in your app's speed and responsiveness.",
            link: "https://www.freecodecamp.org/news/react-performance-optimization-techniques/",
          },
          
        ].map((thought, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="font-semibold text-xl mb-2 text-indigo-600 dark:text-indigo-400">
              {thought.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{thought.desc}</p>
            <a
              href={thought.link}
              className="mt-4 inline-block text-indigo-500 hover:text-purple-500 font-medium transition-colors"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Thoughts;
