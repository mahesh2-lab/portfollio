import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Funcky Code",
    url: "https://funcky-code.vercel.app/",
    img: "https://private-user-images.githubusercontent.com/65208771/370644495-0165bc39-2ac0-4138-966a-091be9f99b19.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM5ODY5NDQsIm5iZiI6MTczMzk4NjY0NCwicGF0aCI6Ii82NTIwODc3MS8zNzA2NDQ0OTUtMDE2NWJjMzktMmFjMC00MTM4LTk2NmEtMDkxYmU5Zjk5YjE5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjEyVDA2NTcyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZhNzM0ZDVkOWRlYjAzODAxN2YyZmZmZThjNTlhMTkwZjIyZGFmODU2Y2E4YWFjYzQ5NDNmMDJjNTZhZmI0YzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Bw5roWmIHsAXu-GsJWmXSo45gBfIfHXTcaFAuPanzXM",
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
    url: "",
    desc: "A security guard management system that allows users to manage their security guards and their shifts.",
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
            {item.img ? <img src={item.img} /> : <iframe src={item.url} frameborder="0" />}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.url} target="_blank">see more</a></button>
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
