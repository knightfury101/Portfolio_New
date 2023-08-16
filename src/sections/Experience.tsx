import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "George Mason University",
      role: "Research Assistant",
      url: "",
      start: "July 2023",
      end: "Present",
      shortDescription: [
        "Research Assistant for the Department of Information Science and Technology in Fairfax, VA, under Prof Kamlajeet Sanghera.",
        "Provide robust support in research activities and data gathering.",
        "Curated an AI-driven course task to educate students on topics such as machine learning, database, and data analytics.",
      ],
    },
    {
      name: "W3 Dev Pvt. Ltd.",
      role: "Web Developer Intern",
      url: "",
      start: "January 2019",
      end: "August 2019",
      shortDescription: [
        "Developed and implemented advanced algorithms using Python, Django, and Flask to optimize website performance, resulting in a 20% decrease in page load time.",
        "Collaborated with UI/UX designers and content creators to create visually appealing and user-friendly websites that increased customer engagement by 15%.",
        "Integrated complex back-end databases and services into existing, improving data retrieval speed by 30% and enhancing overall user experience.",
      ],
    },
    {
      name: "Freemind Software",
      role: "Front End Developer Intern",
      url: "",
      start: "July 2018",
      end: "October 2018",
      shortDescription: [
        "Developed and implemented innovative web design solutions to enhance user experience, resulting in a 30% increase in website traffic",
        "Optimized website performance by reducing load time by 25% through advanced coding in HTML, CSS, and JavaScript.",
        "Collaborated with cross-functional teams to troubleshoot and resolve technical issues, improving overall website functionality by 20%.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
