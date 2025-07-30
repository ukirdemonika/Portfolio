/* eslint-disable no-unused-vars */
import "./WhatIDo.css";
import whatIDo_data from "../../portFolio-data/whatIDo_data";
import { motion } from "framer-motion";
import Skillicons from "../../components/skillicons/Skillicons";
function WhatIDoSection({ theme }) {

    const images = import.meta.glob('../../assets/whatIDo/*', { eager: true });
    const getImage = (fileName) => {
        const key = `../../assets/whatIDo/${fileName}`;
        return images[key]?.default;
    }

    // Animation variants defination
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4 //delay between each child animating
            }
        }
    }
    // Child variant for elements animating from the left
    const leftVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    };

    // Child variant for elements animating from the right
    const rightVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    };

    const leftVariant = {

    }
    return (
        <div>
            {whatIDo_data.map((skill, index) => {
                const isReversed = index % 2 !== 0;
                return (
                    <motion.div key={index}
                        className="whatIDo-main-container"
                        style={{
                            boxShadow: `${theme.secondaryText} 0 0 20px -8px`
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariant}
                    >
                        {/* Image Column */}
                        <motion.div
                            className="whatIDo-image-container"
                            variants={isReversed ? rightVariants : leftVariants}
                        >
                            {/* <div> */}
                            <img
                                src={getImage(skill.img)} alt={skill.title}
                                className="whatIDo-image" />
                            {/* </div> */}
                        </motion.div>
                        {/* Text-Column */}
                        {/* <div> */}
                        <motion.div
                            className="whatIDo-text-container"
                            variants={!isReversed ? rightVariants : leftVariants}>
                            <motion.h1
                                className="whatIDo-text-heading"
                                style={{ color: theme.text }}
                                variants={!isReversed ? rightVariants : leftVariants}>
                                {skill.title}
                            </motion.h1>
                            <div className="whatIDo-tech-stack-logos"

                                variants={!isReversed ? rightVariants : leftVariants}>
                                {skill.techStack && <Skillicons icons={skill.techStack}/>}
                            </div>
                            <div >
                                {skill.skills.map((skillExplanation, index) => {
                                    return (
                                        <p key={index} className="whatIDo-text" style={{ color: theme.secondaryText }}>
                                            {skillExplanation}
                                        </p>
                                    )
                                })}
                            </div>
                        </motion.div>
                        {/* </div> */}
                    </motion.div>
                )
            })}
        </div>
    )
}
export default WhatIDoSection;