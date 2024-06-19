import './navbar.css'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  const items = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Contact",
  ]

  return (
    <div className='nav'>
      {/* Sidebr */}
      <Sidebar />
      <div className="wrapper">
        {/* <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className='nav-ttl'>Dhane</motion.span> */}
        <div className="social">
            {items.map((item,i)=>{
              return <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.96}} transition={{type:"tween"}} href={`#${item}`} key={i}>{item}</motion.a>
            })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
