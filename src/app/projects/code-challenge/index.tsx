import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-64 bg-gradient-to-t to-gray-800 from-blue-500 text-center">
        <h1 className="text-4xl font-semibold">Web Developer & UX Enthusiast</h1>
        <p className="mt-4 text-lg">Building clean, user-friendly digital experiences.</p>
      </section>

      {/* About Section */}
      <section className="p-10 bg-white text-black text-center">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-2 text-lg">Passionate about crafting intuitive and engaging web applications.</p>
      </section>
    </div>
  );
};

export default HomePage;