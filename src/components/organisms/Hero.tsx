import React from "react";
import ChiefRunner from "../ChiefRunner";

const Hero: React.FC = () => {
  return (
    <div>
      <ChiefRunner>
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-semibold">Web Developer & UX Enthusiast</h1>
          <p className="mt-4 text-lg">Building clean and effective digital experiences</p>
        </section>
      </ChiefRunner>
    </div>
  );
};

export default Hero;



