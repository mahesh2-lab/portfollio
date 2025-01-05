import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Funcky Code",
    url: "https://funcky-code.vercel.app/",
    img: "/project/funckycode.png",
    desc: "An online tool to generate code snippets for various programming languages and frameworks, making development faster and easier.",
  },
  {
    id: 2,
    title: "Chat react App",
    url: "https://chatapp.web-project.me/",
    img: "/project/chatapp.gif",
    desc: "A real-time chat application that allows users to create rooms and chat with each other.",
  },
  {
    id: 3,
    title: "Caffeine",
    img: "/project/caffine.png",
    url: "https://mahesh2-lab.github.io/Caffeine/",
    desc: "A simple and elegant landing page for a coffee shop.",
  },
  {
    id: 4,
    title: "Herguard",
    img: "/project/herguard.gif",
    url: "https://herguard.web-project.me/",
    desc: "A security guard management system that allows users to manage their security guards and their shifts.",
  },
  {
    id: 5,
    title: "SaltTechno-Clone",
    img: "/project/salttechno.gif",
    url: "https://mahesh2-lab.github.io/SaltTechno-Clone/",
    desc: "A website for a software company that provides services like web development, mobile app development, and digital marketing.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            {item.img ? <img src={item.img} alt={item.title} /> : <iframe src={item.url} frameborder="0" />}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank"><button>Go here</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progessBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
