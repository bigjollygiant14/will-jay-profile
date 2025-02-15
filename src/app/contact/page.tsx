import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <section className="p-10 bg-white text-black">
        <ul>
          <li><a href="mailto:jaywa14@gmail.com">email me</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;