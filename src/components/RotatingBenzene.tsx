import * as motion from "motion/react-client"

const RotatingBenzene: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      >
        <polygon
          points="50,20 75,35 75,65 50,80 25,65 25,35"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="15" fill="none" stroke="black" strokeWidth="2" />
      </motion.svg>
    </div>
  );
};

export default RotatingBenzene;
