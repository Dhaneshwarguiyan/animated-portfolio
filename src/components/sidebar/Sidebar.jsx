import "./sidebar.css"
import Links from "./links/Links"
import ToggleButton from "./togglebutton/ToggleButton.jsx"
import { motion } from "framer-motion"
import { useState } from "react"

const variants = {
    closed:{
        clipPath:"circle(25px at 50px 50px)",
    },
    open:{
        clipPath:"circle(1150px at 50px 50px)",
        transition:{
            duration:0.6
        }
    }
}

const Sidebar = () => {
    const [isOpen,setOpen] = useState(false);

  return (
    <motion.div className="sidebar" initial="closed" animate={isOpen?"open":"closed"}>
        <motion.div variants={variants} initial="closed" className="bg" animate={isOpen?"open":"closed"}>
            <Links setOpen={setOpen}/>
        </motion.div>
        <motion.div className="button" ><ToggleButton setOpen={setOpen}/></motion.div>
    </motion.div>
  )
}

export default Sidebar
