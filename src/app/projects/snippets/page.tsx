import React from "react";

const Snippets: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <section className="p-10 bg-white text-black">
        <ul>
          <li>Example Unit Test</li>
          <li>Claude/PDF Scraper</li>
        </ul>
      </section>
    </div>
  );
};

export default Snippets;