import "./hero.scss";
import { animate, motion } from "framer-motion";

const textVarient = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVarient = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVarient}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVarient}>MAHESH CHOPADE</motion.h2>
          <motion.h1 variants={textVarient}>
            Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVarient}>
            <motion.button variants={textVarient}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVarient}>Get in Touch</motion.button>
          </motion.div>
          <motion.img
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            variants={textVarient}
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVarient}
        initial="initial"
        animate="animate"
      >
        Web developer featuring the latest web technologies
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
