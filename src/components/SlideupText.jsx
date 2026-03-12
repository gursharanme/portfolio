import { Link } from "react-router-dom";
import { easeInOut, motion } from "motion/react";

const SlideupText = ({ href, onClick,className, text }) => {
  return (
    <Link to={href}>
      <motion.div
        onClick={onClick}
        initial="initial"
        whileHover="hovered"
        className={`relative overflow-hidden uppercase ${className}`}
      >
        <motion.div
          variants={{
            initial: {
              y: 0,
            },
            hovered: {
              y: "-100%",
            },
          }}
          transition={{ duration: 0.25, ease: easeInOut }}
        >
          {text}
        </motion.div>
        <motion.div
          variants={{
            initial: {
              y: "100%",
            },
            hovered: {
              y: 0,
            },
          }}
          transition={{ duration: 0.25, ease: easeInOut }}
          className="absolute inset-0"
        >
          {text}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default SlideupText;