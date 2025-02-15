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
        className="absolute top-8 left-16 w-24 h-12 bg-white rounded-full"
      >
      </motion.div>
      <motion.div
        initial={{ x: "2%", y: "-2%" }}
        animate={{ x: ["2%", "-2%", "-2%", "2%"], y: ["-2%", "2%", "2%", "-2%"] }}
        transition={{ duration: 1.5, times: [0, 0.4, 0.5, 1], ease: "linear", repeat: Infinity }}
        className="absolute top-12 right-32 w-28 h-14 bg-white rounded-full"
      >
      </motion.div>
      
      {/* Dirt Ground with U-Shaped Curve */}
      {/* <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0,20 Q25,5 50,2 Q75,5 100,20 V20 H0 Z" fill="#C4A484" />
      </svg> */}

      <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0,20 Q25,5 50,2 Q75,5 100,20 V20 H0 Z" fill="#C4A484" />
      </svg>
      
      {/* Running Master Chief */}
      <motion.div
        initial={{ x: "-2000%" }}
        animate={{ x: ["-2000%", "50%", "50%", "2000%"] }}
        transition={{ duration: 3.5, times: [0, 0.4, 0.6, 1], ease: "linear", repeat: Infinity }}
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
