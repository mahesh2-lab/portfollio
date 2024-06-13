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
        <img src="/hero.png" alt="" />
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
              lineHeight:"20px",
              letterSpacing: "1px",
              fontWeight: "100"
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum quos, tempore, quibusdam, quas quod illo dolorum
            repudiandae eum magni doloremque. Quisquam voluptatum quos, tempore,
            quibusdam, quas quod illo dolorum repudiandae eum magni doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum quos, tempore, quibusdam, quas quod illo dolorum
            repudiandae eum magni doloremque. Quisquam voluptatum quos, tempore,
            quibusdam, quas quod illo dolorum repudiandae eum magni doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum quos, tempore, quibusdam, quas quod illo dolorum
            repudiandae eum magni doloremque. Quisquam voluptatum quos, tempore,
            quibusdam, quas quod illo dolorum repudiandae eum magni doloremque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
