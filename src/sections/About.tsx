import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Hello, my name is Aditya Singh Rajput, and I am a passionate computer software engineering enthusiast based in Fairfax, Virginia. I have a particular interest in web technologies, which led me to publish a research paper on the Django Web Development framework in IJTRE. Additionally, I have honed my leadership skills by volunteering for NGO drives with the Guru Laxmi Narayan Welfare Society.
          </p>

          <p className="about-grid-info-text">
             When I am not coding, I enjoy playing games, watching movies, and cooking. Lastly, I am an active member of George Mason University&apos;s Counter Strike Global Offensive division, where I have contributed to the team&apos;s success as a crucial eSports member.
          </p> 
          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">Three.js</li>
            <li className="about-grid-info-list-item">GSAP</li>
            <li className="about-grid-info-list-item">Framer Motion</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">HTML5</li>
            <li className="about-grid-info-list-item">CSS3</li>
            <li className="about-grid-info-list-item">C/C++</li>
            <li className="about-grid-info-list-item">MySQL</li>
            <li className="about-grid-info-list-item">GIT</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">Kubernetes</li>
            <li className="about-grid-info-list-item">Rancher</li>
            <li className="about-grid-info-list-item">Jenkins</li>
            <li className="about-grid-info-list-item">Adobe Photoshop</li>
            <li className="about-grid-info-list-item">Adobe Illustrator</li>
            <li className="about-grid-info-list-item">Figma</li>
            <li className="about-grid-info-list-item">Adobe XD</li>
            <li className="about-grid-info-list-item">Cinema 4D</li>
            <li className="about-grid-info-list-item">Blender</li>
            <li className="about-grid-info-list-item">GoLang</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/aditya.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
