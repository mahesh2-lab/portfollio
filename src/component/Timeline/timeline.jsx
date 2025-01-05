import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./timeline.scss";

const educationData = [
  {
    id: 1,
    date: "2011 - 2014",
    title: "Elementary School",
    description: "Elementary School",
  },
  {
    id: 2,
    date: "2014 - 2017",
    title: "Middle School",
    description: "District Primary School Council, Takarkhed, Nandura",
  },
  {
    id: 3,
    date: "2017 - 2019",
    title: "High School (10th Standard)",
    description: "Agri Vidyalaya Shemba Bk",
  },
  {
    id: 4,
    date: "2020 - 2022",
    title: "Higher Secondary School (11th & 12th Science)",
    description: "D.E.S high school and junior college, datala",
  },
  {
    id: 5,
    date: "2022 - present",
    title: "Bachelor's Degree in Computer Science and Engineering",
    description:
      "Pankaj Laddhad Institute of Technology and Management Studies, Buldana",
  },
];
const Single = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  console.log(isHovered);

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper_">
          <div ref={ref}>
            <h2>{item.date}</h2>
          </div>
          <motion.div
            className="text-Container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ y }}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </motion.div>
        </div>
      </div>
      {isHovered && (
          <motion.div
            className="hover-Info"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <p>{item?.extraInfo || "Additional information here."}</p>
          </motion.div>
      )}
    </section>
  );
};

function Timeline() {
  const ref = useRef();

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleYComplete = useTransform(scaleY, [0, 1], [-0.12, 1]);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Education</h1>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleY: scaleYComplete,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: 10,
            height: "179vh",
            originY: 0,
            backgroundColor: "#ff0088",
          }}
        />
      </div>
      {educationData.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Timeline;
