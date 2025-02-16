import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
import { var_ar,var_fr } from "../constants/index"
import PropTypes from 'prop-types';
import { useState,useEffect } from "react";

const varSelector=(lang)=>{
    if(lang==="FR") return var_fr
    else return var_ar
}

const Experience = ({lang}) => {
      const [expList,setExpList]=useState(EXPERIENCES)


          useEffect(() =>{
              if(lang!="GB"){
                setExpList(varSelector(lang).EXPERIENCES)
              }else{
                setExpList(EXPERIENCES)
                      }
                      
              
          },[lang])

    const experience_el=expList.map((exp,index)=>{

        return(
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                <motion.div className="w-full lg:w-1/4"
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}>

                    <p className="mb-2 text-sm text-stone-400 ">{exp.year}</p>

                </motion.div>

                <motion.div className="w-full max-w-xl lg:w-3/4"
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}>

                            <h3 className="mb-2 font-semibold">{exp.role}-{" "}
                                <span className="text-sm text-stone-500">{exp.company}</span>
                            </h3>
                            <p className="mb-4 text-stone-400">
                                {exp.description}
                            </p>
                            {exp.technologies.map((tech,index)=>{
                                return(
                                    <span key={index} className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                                        {tech}
                                    </span>
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
       transition={{duration:0.5}}>{lang=="GB"?"Cursus":varSelector(lang).cursus} </motion.h2>
       {experience_el}
    </div>
  )
}

export default Experience


Experience.propTypes = {
  lang: PropTypes.string,

};
