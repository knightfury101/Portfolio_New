import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project4.png",
      projectName: "Meta Messenger Clone",
      projectLink: "https://meta-messenger-clone-aa2r.vercel.app/",
      projectDescription:
      "This real-time messenger app was built using React.js, Tailwind CSS, Prisma, MongoDB, NextAuth.js, and Pusher. The main features include real-time messaging, message notifications, online/offline user status, message read recipts, file and image upload using Cloudinary CDN, creating group chats, customizing user profile, and authentication with Google and GitHub.",
      projectTech: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "MongoDB",
        "NextAuth.js",
        "Pusher",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/meta-messenger-clone",
        externalLink: "https://meta-messenger-clone-aa2r.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "Airbnb Clone",
      projectLink: "https://clone-project-airbnb-git-main-knightfury101.vercel.app/",
      projectDescription:
      "This app was built using React.js, Tailwind CSS, Prisma, MongoDB, and NextAuth.js. The main features of this clone include a Tailwind design, animations, and effects, full responsiveness, and credential authentication with Google and Github. Users can upload images using Cloudinary CDN and validate client forms using react-hook-form. Additionally, the clone offers a booking and reservation system, as well as advanced search algorithms that allow users to filter properties by category, date range, map location, number of guests, rooms, and bathrooms.",
      projectTech: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "MongoDB",
        "NextAuth.js",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/Clone-Project-Airbnb",
        externalLink: "https://clone-project-airbnb-git-main-knightfury101.vercel.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "AI Powered Summarizer",
      projectLink: "https://scintillating-paletas-a4e5f1.netlify.app/",
      projectDescription:
        "This project was built using React.js and Vite to create a responsive and visually appealing UI/UX with Tailwind CSS. Advanced RTK query API requests are used to fire on certain conditions, and users can save their history using local storage. Form events are also handled and errors can be caught, and users can easily copy content to their clipboard. The project also features a modern and unique aesthetic with a touch of glass morphism applied to the UI/UX, as well as the use of cutting-edge technologies such as OpenAI's GPT model to generate the summary.",
      projectTech: [
        "OpenAI GPT-3",
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Redux Toolkit Query",
        ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/Sum-Up",
        externalLink: "https://scintillating-paletas-a4e5f1.netlify.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "3D Product Showcase",
      projectLink: "https://meek-salamander-9200f0.netlify.app/",
      projectDescription:
        "This project is built using React.js, Three.js, React Three Fiber, Tailwind CSS, and Framer Motion. This project is infused with the power of Artificial Intelligence. The main highlight of this project is the DALL-E AI API, which generates images based on text input. The app also features a 3D product showcase, which allows you to rotate the product and view it from different angles. Additionally, the app is fully responsive and offers a beautiful UI/UX.",
      projectTech: [
        "React.js",
        "DALLE AI API",
        "Three.js",
        "React Three Fiber",
        "Tailwind CSS",
        "Framer Motion",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/threejs-ai",
        externalLink: "https://meek-salamander-9200f0.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
