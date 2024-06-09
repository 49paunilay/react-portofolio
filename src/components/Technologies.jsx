import React from "react";
import PropTypes from "prop-types";
import { FaJava, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { motion } from "framer-motion";


const iconVariants=(duration)=>({
  intial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})

const Technologies = (props) => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{ duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{ duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} intial={"initial"} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(3)} intial={"initial"} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(5)} intial={"initial"} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJs className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div variants={iconVariants(3)} intial={"initial"} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-red-400"/>
        </motion.div>
        <motion.div variants={iconVariants(2.5)} intial={"initial"} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-green-400"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

Technologies.propTypes = {};

export default Technologies;
