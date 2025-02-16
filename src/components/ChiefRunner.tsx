import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"

interface ChiefRunnerProps {
  children?: React.ReactNode;
}

const ChiefRunner: React.FC<ChiefRunnerProps> = ({ children }) => {
  return (
    <div className="relative w-full h-96 flex justify-center items-end overflow-hidden bg-gradient-to-t to-gray-800 from-blue-600 text-center">
      {/* Sun */}
      <div className="absolute top-4 right-8 w-16 h-16 bg-yellow-500 rounded-full"></div>
      
      {/* Clouds */}
      <motion.div
        initial={{ x: "-2%", y: "2%" }}
        animate={{ x: ["-2%", "2%", "2%", "-2%"], y: ["2%", "-2%", "-2%", "2%"] }}
        transition={{ duration: 1.5, times: [0, 0.4, 0.5, 1], ease: "linear", repeat: Infinity }}
        className="absolute top-8 left-16 w-16 h-8 md:w-24 md:h-12 bg-white rounded-full"
      >
      </motion.div>
      <motion.div
        initial={{ x: "2%", y: "-2%" }}
        animate={{ x: ["2%", "-2%", "-2%", "2%"], y: ["-2%", "2%", "2%", "-2%"] }}
        transition={{ duration: 1.5, times: [0, 0.4, 0.5, 1], ease: "linear", repeat: Infinity }}
        className="absolute top-12 right-32 w-20 h-10 md:w-28 md:h-14 bg-white rounded-full"
      >
      </motion.div>

      {/* Big Dipper Stars */}
      {[
        [39.5, 5], [35, 10], [40.25, 15], [45, 10], [50, 5], [55, 7], [60, 3]
      ].map(([left, top], index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ left: `${left}%`, top: `${top}%` }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
        ></motion.div>
      ))}
      
      {/* Dirt Ground with U-Shaped Curve */}
      {/* <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0,20 Q25,5 50,2 Q75,5 100,20 V20 H0 Z" fill="#C4A484" />
      </svg> */}

      {/* Flat Dirt Ground with Small Triangle Mountains */}
      <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
        <rect x="0" y="10" width="100" height="10" fill="#C4A484" />
        <polygon points="20,10 25,2 30,10" fill="#8B5A2B" stroke="" />
        <polygon points="60,10 70,3 75,10" fill="#6e4722" stroke="" />
        <polygon points="70,10 75,2 80,10" fill="#8B5A2B" stroke="" />
      </svg>

      {/* Goomba Animation */}
      <motion.div
        initial={{ x: "-3000%" }}
        animate={{ x: ["-3000%", "35%", "35%", "-3000%"] }}
        transition={{ duration: 8, times: [0, 0.3, 0.8, 1], ease: "linear", repeat: Infinity }}
        className="absolute bottom-4"
      >
        <motion.div
          animate={{ y: [1, 0, 1] }}
          transition={{ times: [0, 0.5, 1], duration: 5, repeat: Infinity }}
        >
          <Image
            src="/goomba.png"
            alt="Running 8-bit Goomba"
            width={30}
            height={30}
            className="pixelated"
          />
        </motion.div>
      </motion.div>

      {/* Rock */}
      <div className="absolute bottom-4 left-[50%] w-14 h-10 bg-gray-400 border border-2 border-gray-500 rounded-full"></div>
      
      {/* Running Master Chief */}
      <motion.div
        initial={{ x: "-2000%" }}
        animate={{ x: ["-2000%", "50%", "50%", "2000%"] }}
        transition={{ duration: 8, times: [0.1, 0.45, 0.6, 1], ease: "linear", repeat: Infinity }}
        className="absolute bottom-4"
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 0.45, ease: "linear", repeatDelay: 1.5 }}
        >
          <Image
            src="/masterchief_8bit.png" 
            alt="Running 8-bit Master Chief"
            width={80}
            height={80}
            className="pixelated"
          />
        </motion.div>
      </motion.div>

      <div className="absolute top-32">
        { children }
      </div>
    </div>
  );
};

export default ChiefRunner;
