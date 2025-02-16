import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { var_ar,var_fr } from "../constants/index"
import PropTypes from 'prop-types';
import { useState,useEffect } from "react";


const varSelector=(lang)=>{
    if(lang==="FR") return var_fr
    else return var_ar
}

const Projects = ({lang}) => {
    const [projectList,setProjectList]=useState(PROJECTS)

    useEffect(() =>{
        if(lang!="GB"){
            setProjectList(varSelector(lang).PROJECTS)
        }else{
            setProjectList(PROJECTS)
        }
        
    },[lang])

    const projects_list=projectList.map((item,index)=>{
        return(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div className="w-full lg:w-1/4"
                 whileInView={{opacity:1,x:0}}
                 initial={{opacity:0,x:-100}}
                 transition={{duration:1}}>
                        <img src={item.image} width={250} height={250} alt="image" className="mb-2 rounded-lg bg-stone-950"/>
                </motion.div>
                <motion.div className="w-full max-w-xl lg:w-3/4"
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}>
                    <h3 className="font-semibold mb-2 text-2xl">
                            {item.title}
                    </h3>
                    <p className="text-stone-400 mb-4">
                        {item.description}
                    </p>
                    {item.technologies.map((tech,index)=>{
                        return(
                            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"key={index}> {tech} </span>
                        )
                    })}
                </motion.div>

            </div>
        )
    })
  return (
    <div className="pb-4">
        <motion.h2 className="my-20 text-center text-4xl font-bold "
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}>Projects</motion.h2>
    <div>
        {projects_list}
      
    </div>
    </div>
  )
}

export default Projects


Projects.propTypes = {
  lang: PropTypes.string,

};
