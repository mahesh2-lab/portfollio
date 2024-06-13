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
          <motion.div className="buttons">
            <motion.a
              href="https://github.com/mahesh2-lab"
              target="_blank"
              variants={textVarient}
            >
              <img src="/github.svg" alt="" />
            </motion.a>
            <motion.a
              href="https://stackoverflow.com/users/20189194/bot-tech"
              target="_blank"
              variants={textVarient}
            >
              <img src="/stack.svg" alt="" />
            </motion.a>

            <motion.a
              href="https://www.npmjs.com/~mahesh2-lab"
              target="_blank"
              variants={textVarient}
            >
              <img src="/npm.svg" alt="" />
            </motion.a>
            <motion.a href="https://read.cv/mahesh2lab" target="_blank" variants={textVarient}>
              <img src="/download.svg" alt="" />
            </motion.a>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 460,
            damping: 10,
            duration: 20,
          }}
        >
          <lord-icon
            src="/Animation.json"
            trigger="loop"
            style={{ width: 800, height: 800 }}
          ></lord-icon>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
