import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I&apos;m open to job opportunities and collaboration projects. Feel free to reach out to me via email, or connect with me on LinkedIn.<br/>Don&apos;t be shy, say Hello!
      </p>
      <div className="contact-cta">
        <Button link="mailto:arajput4@gmu.edu" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
