import React from "react";
import ContactForm from "@/components/organisms/ContactForm";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <section className="p-10 bg-white text-black">
        <div className="w-full max-w-sm m-auto">
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold">About</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;