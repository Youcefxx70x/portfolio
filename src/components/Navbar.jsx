import ReactCountryFlag from "react-country-flag";
import { FaLinkedin,FaGithub ,FaInstagram,FaFacebook} from "react-icons/fa"
import PropTypes from 'prop-types';

const Navbar = ({setLang}) => {

  const Flags=["GB","FR","DZ"].map((country,index)=>{
    return(
      <button key={index} className="cursor-pointer" onClick={()=>{setLang(country)}}> 
          <ReactCountryFlag
          countryCode={country}
          svg
          className="rounded-lg"
          style={{ width: '2em', height: '2em' }}
        />

      </button>)
  })

  return (
    
      <nav className="flex flex-wrap justify-between items-center py-6">
        <div className="flex flex-shrink-0 items-center gap-3">
          {Flags}
        </div>
        <div className="flex justify-center items-center gap-4 text-3xl ">
                <a className={`hover:text-6xl`} href="https://www.linkedin.com/in/youcef-ouahab-b187461a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin/></a>
                <a className={`hover:text-6xl`} href="https://github.com/Youcefxx70x" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub/></a>
                <a className={`hover:text-6xl`} href="https://www.instagram.com/ucex._.xef/?next=%2F" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram/></a>
                <a className={`hover:text-6xl`} href="https://www.facebook.com/YssF.H.OhB" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook/></a>
        </div>
      </nav>
    
  )
}

export default Navbar

Navbar.propTypes = {
  setLang: PropTypes.func.isRequired,

};


