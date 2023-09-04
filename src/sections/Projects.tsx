import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project11.png",
      projectName: "Discord Clone",
      projectLink: "https://discord-clone-production-e325.up.railway.app/",
      projectDescription:
        "With Socket.io at its core, this Discord clone offers lightning-fast messaging and supports file attachments via UploadThing. Edit and delete messages in real-time, host 1:1 conversations, and conduct video calls provided by LiveKit. Manage members effortlessly and generate unique invite links. Customize your server, experience a sleek UI with light/dark modes, and ensure uninterrupted connections with WebSocket fallback. Utilizing Prisma for ORM and PlanetScale for MySQL, prioritize security with authentication via Clerk. Deployed with ease on Railway and revolutionize your communication experience.",
      projectTech: [
        "Socket.io",
        "LiveKit",
        "UploadThing",
        "Next.js 13",
        "React.js",
        "Tailwind CSS",
        "Prisma",
        "MySQL",
        "ShadcnUI",
        "Prisma",
        "Clerk Authentication",
        "Railway",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/discord-clone",
        externalLink: "https://discord-clone-production-e325.up.railway.app/",
      },
    },  
    {
      image: "/project10.png",
      projectName: "Sideckick+ AI SaaS",
      projectLink: "https://ai-sidekick.vercel.app/",
      projectDescription:
        "Sidekick+ is an advanced AI SaaS integrating cutting-edge technologies like LangChain, Pinecone, Upstash, and OpenAI to enable robust capabilities. It provides a free tier for basic features, but users can upgrade to a premium tier to craft tailored assistants, enabled by Stripe payments. Additionally, this AI SaaS project consolidates Next.js, React, Tailwind, Prisma, and Clerk for streamlined authentication powered by vector, redis, and OpenAI's potent API. In summary, Sidekick+ artfully combines leading technologies to deliver customizable AI assistants and capabilities through a streamlined SaaS platform.",
      projectTech: [
        "OpenAI API",
        "Replicate AI API",
        "LangChain",
        "Pinecone Vector Database",
        "Upstash Redis Database",
        "Next.js 13",
        "React.js",
        "Tailwind CSS",
        "Stripe",
        "Cloudinary CDN",
        "ShadcnUI",
        "Prisma",
        "Clerk Authentication",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/ai-sidekick",
        externalLink: "https://ai-sidekick.vercel.app/",
      },
    },
    {
      image: "/project9.png",
      projectName: "Savant+ AI SaaS",
      projectLink: "https://ai-saas-j3s6xvj54-knightfury101.vercel.app/",
      projectDescription:
      "Savant+ is an advanced AI SaaS integrating OpenAI and ReplicateAI APIs for chatbot, code, image, video, and music generation. Built with Next.js, React.js, Tailwind CSS, and Prisma, it offers secure authentication via Clerk and real-time support through Crisp Chat. Users can access a free tier with limited usage and upgrade to premium features with Stripe payment. A comprehensive AI solution for creative endeavors and business needs.",
      projectTech: [
        "OpenAI API",
        "Replicate AI API",
        "Next.js 13",
        "React.js",
        "Tailwind CSS",
        "Stripe",
        "ShadcnUI",
        "Prisma",
        "PlanetScale",
        "Clerk Authentication",
        "Crisp Chat",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/ai-saas/tree/main",
        externalLink: "https://ai-saas-j3s6xvj54-knightfury101.vercel.app/",
      },
    },
    {
      image: "/project7.png",
      projectName: "E-Commerce Front-End Store",
      projectLink: "https://ecommerce-store-nine-psi.vercel.app/",
      projectDescription:
      "Introducing an impressive store developed with React.js, Next.js 13 App Router, Tailwind CSS, Prisma, MySQL, and PlanetScale. Users can explore and order products available on the website. The store provides convenient size and color filters for easy product selection. Additionally, it incorporates an 'Add To Cart' functionality for seamless shopping experiences. To ensure secure transactions, the store utilizes Stripe Checkout and Stripe Webhooks.",
      projectTech: [
        "Next.js 13.4 App Router",
        "React.js",
        "Tailwind CSS",
        "MySQL",
        "Stripe",
        "ShadcnUI",
        "Prisma",
        "PlanetScale",
        "Clerk Authentication",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/ecommerce-store",
        externalLink: "https://ecommerce-store-nine-psi.vercel.app/",
      },
    },
    {
      image: "/project8.png",
      projectName: "E-Commerce Dashboard",
      projectLink: "https://ecommerce-admin-bupfqm4m6-knightfury101.vercel.app/",
      projectDescription:
      "Introducing a state-of-the-art Admin Dashboard built with React.js, Next.js 13 App Router, Tailwind CSS, Prisma, MySQL, and PlanetScale. Users can manage multiple vendors/stores through this unified dashboard. The dashboard incorporates advanced Clerk Authentication and utilizes the ShadcnUI for the user interface.",
      projectTech: [
        "Next.js 13.4 App Router",
        "React.js",
        "Tailwind CSS",
        "MySQL",
        "Stripe",
        "ShadcnUI",
        "Prisma",
        "PlanetScale",
        "Clerk Authentication",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/ecommerce-admin",
        externalLink: "https://ecommerce-admin-bupfqm4m6-knightfury101.vercel.app/",
      },
    },
    {
      image: "/project5.png",
      projectName: "Spotify Clone",
      projectLink: "https://spotify-clone-tan-five.vercel.app/",
      projectDescription:
      "Introducing the Full Stack Spotify Clone built using Next.js 13.4, React.js, Tailwind CSS, Supabase, PostgreSQL, and Stripe. This project covers key features such as song upload song/image, Stripe integration for payments, Supabase and PostgreSQL for efficient database handling, and Tailwind CSS for sleek UI design and responsive layout for all devices. It also includes advanced player component, Stripe recurring payments, favorites system, and much more.",
      projectTech: [
        "Next.js 13.4",
        "React.js",
        "Tailwind CSS",
        "Stripe",
        "Supabase",
        "PostgreSQL",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/spotify-clone",
        externalLink: "https://spotify-clone-tan-five.vercel.app/",
      },
    },
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
    },{
      image: "/project6.png",
      projectName: "Auto Moto",
      projectLink: "https://auto-moto-alay.vercel.app/",
      projectDescription:
        "The project will use NextJS 13 App Router and Server Side Rendering to provide a fast and SEO-friendly experience for users. It will also implement advanced search functionality, filtering capabilities, and custom filter, combobox, and modal elements. The project will allow users to search for cars without updating the search parameters, search through filters without updating the search parameters, and leverage the powers of 2 APIs in one project.",
      projectTech: [
        "React.js",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Rapid API",
      ],
      projectExternalLinks: {
        github: "https://github.com/knightfury101/auto_moto",
        externalLink: "https://auto-moto-alay.vercel.app/",
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
