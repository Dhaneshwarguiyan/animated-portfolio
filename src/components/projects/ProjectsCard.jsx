import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./projects.css"

const ProjectsCard = ({item}) => {
    const {image,tech,desc,gitLink,liveLink} = item;
  return (
    <motion.div whileHover={{scale:1.05}} className='main-card'>
        <div className='card-top'>
            <img className='card-img' src={image} alt="project image" />
            <div className="card-tech-stack">{tech}</div>
        </div>
        <div className="card-desc">
            {desc}
        </div>
        <div className="card-links">
        <motion.a className="link-btn" whileHover={{scale:1.1}} whileTap={{scale:0.95}} href={gitLink}><FaGithub className='icon'/> GitHub</motion.a>
        <motion.a className="link-btn" whileHover={{scale:1.1}} whileTap={{scale:0.95}} href={liveLink}><FaEye className='icon'/> Live Demo</motion.a>
        </div>
    </motion.div>
  )
}

export default ProjectsCard
