/* eslint-disable no-unused-vars */
import  {motion}  from "framer-motion";
import WhatIDoSection from "./whatIDoSection";
import './whatIDo.css';

function WhatIDo(props) {

  const theme=props.theme;

  const headerVariants={
    hidden:{
      opacity:0,
      y:20
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:1
      }
    }
  }
  return (
    <div className="whatIDo-container">
      <div className="whatIDo-header-section">
        <motion.h1
          className="whatIDo-header"
          initial="hidden"
          style={{ color: theme.text }}
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          theme={theme}
        >
          What I Do?
        </motion.h1>
      </div>
      <WhatIDoSection theme={theme}/>
    </div>
  );
}

export default WhatIDo;
