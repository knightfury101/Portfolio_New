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
        "Mentored a cohort of 40 undergraduate students in foundational aspects of deep learning, software engineering, and data analytics, fostering skills essential for entry-level positions in the technology sector.",
        "Formulated and implemented coursework and evaluations, enhancing students' understanding and engagement in AI technologies.",
        "Developed a personal AI assistant using Amazon Alexa Skills Kit (ASK), showcasing the application of AI concepts in software.",
        "Devised and deployed sophisticated web crawlers to analyze over a million websites, successfully identifying critical vulnerabilities such as exposed private information, personal access keys, and potential honeypot traps.",
        "Integrated Selenium and AWS EC2 instances, significantly enhancing the efficiency and scalability of the web crawling process for large-scale data processing.",
      ],
    },
    {
      name: "Scrollify",
      role: "Frontend Developer, Founding Team",
      url: "",
      start: "June 2023",
      end: "Present",
      shortDescription: [
        "Employed React.js and Next.js to craft fluid and responsive web designs to develop an admin dashboard for Scrollify products, ensuring efficient data servicing and management across multiple platforms.",
        "Executed real-time communication features using WebSockets and Socket.io, providing seamless support to users.",
        "Orchestrated the Dockerization of frontend applications and oversaw their deployment on Amazon EC2 servers, streamlining the development process and ensuring robust application performance.",
      ],
    },
    {
      name: "Gloway InfraTech",
      role: "Frontend Developer",
      url: "",
      start: "August 2019",
      end: "June 2021",
      shortDescription: [
        "Spearheaded the development of dynamic and scalable frontend solutions utilizing React.js and Next.js, resulting in a ∼12% boost in user interaction metrics through integration with technologies like AWS Lambda, API Gateway, and DynamoDB.",
        "Enforced stringent type checking and elevated code quality through TypeScript in a cross-functional capacity.",
        "Successfully delivered multiple high-impact features on time, demonstrating proficiency in efficiently integrating frontend components within an agile development framework while adhering to industry best practices.",
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
