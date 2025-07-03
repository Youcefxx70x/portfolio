import {RiNextjsFill, RiReactjsLine, RiSupabaseFill} from "react-icons/ri" 
import { SiExpo ,SiDjango } from 'react-icons/si';
import {DiRedis} from "react-icons/di"
import {BiLogoPostgresql} from "react-icons/bi"
import { motion } from "framer-motion";

import { var_ar,var_fr } from "../constants/index"
import PropTypes from 'prop-types';



const varSelector=(lang)=>{
    if(lang==="FR") return var_fr
    else return var_ar
}

/*{lang=="GB"?"Full-Stack Developer":varSelector(lang).title}*/

const IconVariants=(duration)=>({
  initial:  {y:-10},
  animate:{
    y:[40,-40],
    x:[20,-20],
    transition:{
        duration: duration,
        ease:'linear',
        repeat:Infinity,
        repeatType:'reverse'
    }

  }
})

const Technologies = ({lang}) => {

  return (
    <div className="pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:2.5}}
         className="my-20 text-center text-4xl font-bold ">{lang=="GB"?"Technologies":varSelector(lang).technologies}</motion.h2>
        <motion.div className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:3}}>
                <motion.div
                initial="initial"
                animate="animate"
                variants={IconVariants(3)}
                >
                    <RiReactjsLine className="text-8xl text-cyan-700"/>
                     <p className="text-center font-bold text-lg px-2 text-cyan-700">React</p>
                </motion.div>

                  <motion.div
                initial="initial"
                animate="animate"
                variants={IconVariants(3)}
                >
                    <RiNextjsFill className="text-8xl "/>
                     <p className="text-center font-bold text-lg px-2 ">Next js</p>
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={IconVariants(5)}
                >
                    <SiExpo className="text-7xl text-stone-300"/>
                     <p className="text-center font-bold text-lg px-2 ">Expo</p>
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={IconVariants(2)}
                >
                    <DiRedis className="text-9xl text-red-600"/>
                     <p className="text-center font-bold text-lg px-2 text-red-600">Redis</p>
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={IconVariants(6)}>
                    <SiDjango className="text-8xl text-green-900"/>
                    <p className="text-center font-bold text-lg px-2 text-green-900">django</p>
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={IconVariants(4)}>
                    <RiSupabaseFill className="text-8xl"/>
                    <p className="text-center font-bold text-lg px-2 ">Supabase</p>
                </motion.div>

                  <motion.div
                initial="initial"
                animate="animate"
                variants={IconVariants(4)}>
                    <BiLogoPostgresql className="text-8xl text-blue-900"/>
                    <p className="text-center font-bold text-lg px-2 text-cyan-700">Postgresql</p>

                </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies



Technologies.propTypes = {
  lang: PropTypes.string,

};
