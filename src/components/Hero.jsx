import profile from "../assets/pic.png"
import profile2 from "../assets/p.png"
import {HERO_CONTENT} from "../constants/index"
import { motion } from "framer-motion"
import { var_ar,var_fr } from "../constants/index"
import PropTypes from 'prop-types';


const varSelector=(lang)=>{
    if(lang==="FR") return var_fr
    else return var_ar
}

const Hero = ({lang}) => {
    const containerVariants={
        hidden:{opacity:0,x:-100},
        visible:{opacity:1,x:0,transition:{
            duration:0.5,
            staggerChildren:0.5
        }},
    }

    const childVariants={
        hidden:{opacity:0,x:-100},
        visible:{opacity:1,x:0,transition:{duration:0.5}}
    }
  return (
    <div className="pb-4 lg:mb-34">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center sm:justify-end items-center h-full">
               <motion.img 
  src={profile2}
  className="w-40 h-80 sm:w-60 sm:h-150  rounded-full md:w-72 lg:w-80 xl:w-96 border border-stone-900 md:rounded-3xl "
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 1.5 }}
/>

            </div>
        </div>
        <div className="w-full lg:w-1/2 ">
                <motion.div className="flex flex-col items-center lg:items-start mt-10" initial="hidden" animate="visible" variants={containerVariants} >
                    <motion.h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl" variants={childVariants}>{lang=="GB"?"Youcef Habib Ouahab":varSelector(lang).name}</motion.h2>
                    <motion.span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent" variants={childVariants}>{lang=="GB"?"Full-Stack Developer":varSelector(lang).title}</motion.span>
                    <motion.p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter" variants={childVariants}>{lang=="GB"?HERO_CONTENT:varSelector(lang).HERO_CONTENT}</motion.p>
                </motion.div>

            </div>
        </div>
      </div>
  
  )
}

export default Hero


Hero.propTypes = {
  lang: PropTypes.string,

};
