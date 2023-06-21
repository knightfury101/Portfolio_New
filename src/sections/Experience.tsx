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
      name: "CueTech Systems",
      role: "Junior Software Engineer",
      url: "",
      start: "October 2018",
      end: "July 2021",
      shortDescription: [
        "Supported and maintained existing projects, reviewed bugs, reported, and fixed issues in existing software on Python.",
        "Worked on writing unit tests for Python SDK and Python scripts using the Agile development framework.",
        "Involved in web/application development using Python, HTML5, CSS3, AJAX, JSON, and jQuery.",
        "Developed and tested multiple dashboard features using Python, Java, Bootstrap, CSS, JavaScript, and jQuery.",
        "Generated Python Django forms to record online user data and used PyTest for writing test cases.",
        "Developed views and templates with Django view controllers and template language to create a user-friendly website interface.",
        "Used Git version control and deployed projects to Heroku.",
        "Gained experience with Docker and deployed applications inside software containers.",
        "Involved in the design and development phases of Agile software development",
        "Coordinated with a team of developers and designers while interacting with project managers, staff, and other stakeholders to understand user needs.",
      ],
    },
    // {
    //   name: "W3 Dev Pvt. Ltd.",
    //   role: "Web Developer Intern",
    //   url: "",
    //   start: "January 2019",
    //   end: "August 2019",
    //   shortDescription: [
    //     "I have extensive experience collaborating with cross-functional teams and have been involved in ideating, designing, and deploying new websites from conception to launch, ensuring seamless integration with complex back-end databases and services.",
    //     "Additionally, I have contributed to updating existing websites using my expertise in full-stack development to deliver an exceptional user experience to end-users.",
    //     "With my technical proficiency and collaborative approach, I have established a reputation as a full-stack developer who consistently delivers exceptional results on time and on budget.",
    //   ],
    // },
    // {
    //   name: "Freemind Software",
    //   role: "Front End Developer Intern",
    //   url: "",
    //   start: "July 2018",
    //   end: "October 2018",
    //   shortDescription: [
    //     "I have successfully executed critical improvements to enhance user interface and experience by utilizing advanced coding techniques in HTML, CSS, and JavaScript frameworks such as jQuery and React.js.",
    //     "Additionally, I have effectively translated UI/UX design frameworks into polished, high-quality visual elements through skillful coding in dynamic, fast-paced environments.",
    //   ],
    // },
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
