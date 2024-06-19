import "./projects.css"
import ProjectsCard from "./ProjectsCard"
import { motion } from 'framer-motion'

const viewVariants = {
  initial:{
    y:150,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      staggerChildren:0.3,
      duration:0.2,
    }
  }
}

const items = [
    {
        image:"./tube.png",
        tech:"StreamNest",
        liveLink:"https://dhaneshwars-youtube.netlify.app",
        gitLink:"https://github.com/Dhaneshwarguiyan/Youtube-Clone",
        desc:"StreamNest – a YouTube clone crafted with React and powered by the YouTube API from Rapid API. Through this project, I've mastered key React concepts, including the useReducer hook for centralized state management, and useContext with createContext for seamless state propagation across the component tree. Explore StreamNest, where innovation in React meets dynamic video streaming."
    },
    {
        image:"./eCom.png",
        tech:"ShopSphere",
        gitLink:"https://github.com/Dhaneshwarguiyan/MyEcommerce",
        liveLink:"https://dhaneshwar-ecommerce.netlify.app",
        desc:"Introducing ShopSphere – an eCommerce website meticulously crafted with React. Through this project, I honed my skills with React hooks like useState and useRef, mastered website routing with React Router, and implemented a robust component-based architecture. Explore ShopSphere."
    },
    {
        image:"./spotify.png",
        tech:"EchoTunes",
        gitLink:"https://github.com/Dhaneshwarguiyan/SpotifyClone",
        liveLink:"",
        desc:"EchoTunes – a dynamic Spotify clone built with React. Through this project, I mastered fetching data from APIs and integrating it seamlessly into the website, creating an engaging user experience. Leveraging the Spotify Developer API, EchoTunes exemplifies cutting-edge React development and dynamic content delivery."
    },
]

const Projects = () => {
  return (
    <motion.div className='projects' initial="initial" whileInView="animate" variants={viewVariants} viewport={{amount:0.1}} >
      <motion.div className="heading" >{`</Projects>`}</motion.div>
      <motion.div className="projects-main"  >
        {items.map((item,key)=>{
            return <ProjectsCard key={key} item={item}/>
        })}
      </motion.div>
    </motion.div>
  )
}

export default Projects
