import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { var_ar,var_fr } from "../constants/index"
import PropTypes from 'prop-types';


const varSelector=(lang)=>{
    if(lang==="FR") return var_fr
    else return var_ar
}


const Contact = ({lang}) => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2 className="my-10 text-center text-4xl"
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:2.5}}>{lang=="GB"?"Get In Touch":varSelector(lang).getInTouch}</motion.h2>
      <motion.div className="text-center tracking-tighter"
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}}>
        <motion.p className="my-4"
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:1}}>
            {CONTACT.address}
        </motion.p>

        <motion.p className="my-4"
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:1}}>
            {CONTACT.phoneNo}
        </motion.p>

        <p className="border-b">
            {CONTACT.email}
        </p>
      </motion.div>
    </div>
  )
}

export default Contact


Contact.propTypes = {
  lang: PropTypes.string,

};
