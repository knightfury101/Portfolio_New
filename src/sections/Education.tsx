import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Education() {
  const [select, setSelect] = useState(0);

  useEffect(() => {
    const transformSelect = () => {
      const eduunderline = document.querySelector<HTMLElement>(".eduunderline");
      eduunderline!.style.top = `${select * 3.5}rem`;
    };
    transformSelect();
  }, [select]);

  const educations = [
    {
      name: "George Mason University",
      role: "Master of Science in Computer Science",
      url: "https://www.gmu.edu/",
      start: "August 2021",
      end: "May 2023",
      shortDescription: [
      "GPA: 3.5",
      "Relevant Coursework: Analysis of Algorithms, Computer and System Programming, Operating System, Embedded Systems, Database Management System, System Model and Architecture",
      "Operating System Project: The project involving Linux command-line tools utilized a Directed Acyclic Graph to streamline the execution of CMD line tools and improve their performance. The use of GoLang allowed for effecient parallel processing od fata, leading to significant performance improvements.",
      ],
    },
    {
      name: "Guru Gobind Singh Indraprastha University",
      role: "Bachelor of Technology in Computer Science",
      url: "http://www.ipu.ac.in/",
      start: "September 2016",
      end: "September 2020",
      shortDescription: [
        "GPA: 3.2",
        "Relevant Coursework: Data Structures, OOPs, Artifical Intelligence, Data Mining, Computer Networks, Theory of Computation, Computer Organization and Architecture",
        "Farmer Voice Bot Project: The voice-enabled conversational AI bot for farmers were designed to provide farmers with an intuitive and accessible platform for resolving common queries and issues. The use of Python and advanced libraries allowed for this quick and accurate retrieval of responses, while the multilingual capabilities of the bot make it avvessible to farmers around the world.",
      ],
    },
  ];
  return (
    <motion.div className="education" id="education" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}
    variants={{
      visible: { opacity: 1, y: -50 },
      hidden: { opacity: 0, y: 0 },
    }}>
        <div className="edu-title">
            <h2>Where I&apos;ve Studied</h2>
        </div>
        <div className="edu-container">
            <ul className="edu-slider">
                <div className="eduunderline"></div>
                {
                    educations.map((education, index) => {
                        return <li key={index} className={`edu-slider-item ${index === select && "edu-slider-item-select"}`} onClick={() => setSelect(index)}>
                            <span>{education.name}</span>
                        </li>
                    })
                }
            </ul>
            <div className="edu-details">
                <div className="edu-details-position">
                    <h3>
                        <span>{educations[select].role}</span>
                        <span className="edu-details-position-company">
                            &nbsp;@&nbsp;
                            <Link className="edu-link" href={educations[select].url}>
                            {educations[select].name}
                            </Link>
                        </span>
                    </h3>
                    <p className="edu-details-range">
                        {educations[select].start} - {educations[select].end}
                    </p>
                    <ul className="edu-details-list">
                        {
                            educations[select].shortDescription.map((description, index) => (<li key={index} className="edu-details-list-item">{description}</li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </motion.div>    
  );
}

export default Education;
