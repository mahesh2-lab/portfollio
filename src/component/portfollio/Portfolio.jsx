import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "3D Object Maker",
    img: "https://3dobjectmaker.web-project.me/",
    url: "https://3dobjectmaker.web-project.me/",
    desc: "The 3D Object Maker is a software tool designed to help users create, edit, and manipulate 3D objects easily. It is suitable for beginners and advanced users, supporting 3D printing, game development, animation, and virtual reality.",
  },
  {
    id: 2,
    title: "Mobile App",
    img: "https://chatapp.web-project.me/",
    url: "https://3dobjectmaker.web-project.me/",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    title: "Web App",
    img: "https://images.pexels.com/photos/24879586/pexels-photo-24879586/free-photo-of-a-wooden-cabin-in-the-mountains-with-mountains-in-the-background.jpeg",
    url: "",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    title: "Mobile App",
    img: "https://images.pexels.com/photos/6068771/pexels-photo-6068771.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
            <iframe src={item.img} frameborder="0" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.url}>see more</a></button>
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
