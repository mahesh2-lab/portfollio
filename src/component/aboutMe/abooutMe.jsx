import "./abooutMe.scss";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="aboutme">
      <div className="imagecontainer">
        <img src="/hero.png" alt="Hero Image" />
      </div>
      <div className="wrapper" ref={ref}>
        <div
          className="textcontainer"
          style={{
            transform: isInView ? "none" : "translateX(500px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.8s",
            transitionDelay: "0.7s",
          }}
        >
          {isInView && (
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[1000, "", 1000, "MR. MAHESH CHOPADE", 1000]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
            />
          )}
          <h3
            style={{
              transform: isInView ? "none" : "translateX(500px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.8s",
              transitionDelay: "0.5s",
            }}
          >
            Web developer and UI designer
          </h3>
          <p
            style={{
              transform: isInView ? "none" : "translateX(500px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.8s",
              transitionDelay: "0.4s",
              lineHeight: "20px",
              letterSpacing: "1px",
              fontWeight: "200",
            }}
          >
            Hello! I'm Mahesh Sunil Chopade, a passionate student of Computer
            Science and Engineering with a keen interest in web development.
            Aspiring to bridge the gap between creativity and functionality, I
            immerse myself in the dynamic world of coding to craft innovative
            digital experiences. From conceptualizing designs to bringing them
            to life with precision and elegance, I thrive on the challenges of
            turning ideas into interactive realities. Join me on this journey as
            we explore the boundless possibilities of the digital landscape
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
