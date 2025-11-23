import React from "react";

const Thoughts = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-2">
          Thoughts
        </h2>
        
        {/* Under Development Notice */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-full animate-pulse">
          🚧 This section is under development — stay tuned!
        </span>

        {/* Intro Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Welcome to my Thoughts section — a space where I’ll soon be sharing insights,
          reflections, and ideas from my journey as a developer and lifelong
          learner. Articles, experiences, and tips will appear here once this
          section is ready.
        </p>
      </div>

      {/* Placeholder Thought cards */}
      <div className="max-w-6xl mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {[1, 2, 3].map((idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-2xl shadow-md opacity-70 cursor-not-allowed"
          >
            <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <span className="inline-block mt-4 text-gray-500 dark:text-gray-400 italic text-sm">
              Coming soon...
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Thoughts;
