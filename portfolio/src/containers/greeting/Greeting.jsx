/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { greeting } from "../../portFolio-data/greeting-data";
import Socialmedia from "../../components/socialMedia/socialMedia";
import Button from "../../components/button/Button";
import "./Greeting.css";
import monikaImg from "../../assets/images/monika.jpg";

// This file defines animation variants and the Greeting component using Framer Motion.
const containerVariants = {
  hidden: { opacity: 0, y: 20 }, // Initial state
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2 // Stagger children animations
    }
  }, // Final state
}

const itemvariants = {
  hidden: { opacity: 0, y: 20 }, // Initial state for each item
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
}

const Greeting = ({ theme }) => {


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="greet-main"
      id="greeting"
    >

      <div className="greeting-main" >
        <div className="greeting-text-div greeting-section"  >
          <div className="greeting-name" style={{ color: theme.text }}>
            <h1 className="greeting-text">
              {greeting.title}
            </h1>
            {greeting.pronouns && (
              <h2 className="greeting-pronouns">
                {greeting.pronouns}
              </h2>
            )}
          </div>
          <div className="greeting-desc">
            <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
              {greeting.subTitle}
            </p>
            <Socialmedia theme={theme}></Socialmedia>
            <div className="portfolio-repo-btn-div">
              <Button
              text= "⭐ See my Resume" 
              newTab={true}
              href={greeting.resumeLink}
              className="portFolio-repo-btn"
              theme={theme}
              />
            </div>
          </div>
        </div>
        <div className="greeting-image-div greeting-section">
          {<img
            alt="Monika Jondhale"
            src={monikaImg}
            className="profile-image"
          />}
        </div>
      </div>


    </motion.div>



  )
};

export default Greeting;