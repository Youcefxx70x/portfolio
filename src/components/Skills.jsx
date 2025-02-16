import { motion } from "framer-motion"
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import { var_ar,var_fr } from "../constants/index"
import PropTypes from 'prop-types';


const varSelector=(lang)=>{
    if(lang==="FR") return var_fr
    else return var_ar
}



const Skills = ({lang}) => {
  return (
    <div className="pb-24">
         <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:2.5}}
         className="mb-10 text-center text-4xl font-bold "> {lang=="GB"?"Languages":varSelector(lang).languages}</motion.h2>

        <div className="w-full lg:w-1/4 h-[200px] border-2 m-auto flex-col">
            <div className="h-1/3 w-full flex">
                <div className="w-1/5 h-full flex items-center justify-center"><SiPython className="text-4xl text-[#3776AB]"/></div>
                <div className="w-4/5 flex items-center">
                    <motion.div className="h-1/3 w-full bg-[#3776AB]"
                     initial={{ width: 0 }}
                     whileInView={{ width: 200 }}
                     transition={{ duration: 2, ease: "easeInOut" }}
                    ></motion.div>
                </div>
            </div>
            <div className="h-1/3 w-full flex ">
            <div className="w-1/5 h-full flex items-center justify-center"><SiJavascript className="text-3xl text-yellow-300"/></div>
            <div className="w-4/5 flex items-center">
                    <motion.div className="h-1/3 w-full bg-yellow-300"
                     initial={{ width: 0 }}
                     whileInView={{ width: 150 }}
                     transition={{ duration: 4, ease: "easeInOut" }}
                    ></motion.div>
                </div>
            </div>

            <div className="h-1/3 w-full flex ">
            <div className="w-1/5 h-full flex items-center justify-center"><SiTypescript className="text-3xl text-blue-300"/></div>
            <div className="w-4/5 flex items-center">
                    <motion.div className="h-1/3 w-full bg-blue-300"
                     initial={{ width: 0 }}
                     whileInView={{ width: 100 }}
                     transition={{ duration: 5, ease: "easeInOut" }}
                    ></motion.div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Skills

Skills.propTypes = {
  lang: PropTypes.string,

};