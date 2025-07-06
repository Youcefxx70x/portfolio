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

        <p >
            {CONTACT.email}
        </p>
        <div className="border-b">
          <button className=" text-md my-5 px-4 py-2  text-center lg:text-2xl rounded-lg bg-amber-50 lg:px-8 lg:py-4 text-black cursor-pointer capitalize hover:bg-amber-100 font-bold transition">
                    <a href="/CV.pdf"
                            download
                           >download my resume</a>
          </button>
  
        </div>

      </motion.div>
    </div>
  )
}

export default Contact


Contact.propTypes = {
  lang: PropTypes.string,

};
