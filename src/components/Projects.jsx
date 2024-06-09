import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";


function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{ duration:1}} className="py-20  text-4xl text-center ">Personal Projects</motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{ duration:1.5}} className=" w-full lg:w-1/4 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  height={150}
                  width={150}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:100}} transition={{ duration:1.5}} className="w-full max-w-xl lg:w-3/4 justify-center items-center">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400 ">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      
    </div>
  );
}

export default Projects;