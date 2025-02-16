import React from "react";
import * as motion from "motion/react-client"

export default function GoombaBounce() {
  return (
    <div className="flex justify-center items-center">
      <motion.img
        src="/goomba.png"
        alt="Goomba"
        className="w-32 h-32"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
}