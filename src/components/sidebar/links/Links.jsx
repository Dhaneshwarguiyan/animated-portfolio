import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    transition:{
      staggerChildren:0.15,
    }
  },
  closed: {
    transition:{
      staggerChildren:0.08,
      staggerDirection:-1,
    }
  }
}
const itemVariants = {
  open: {
    y:0,
    opacity:1,
  },
  closed: {
    y:50,
    opacity:0,
  }
}


const Links = ({setOpen}) => {

  const items = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Contact",
  ]

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item,i)=>{
        return  <motion.a href={`#${item}`} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.99}} key = {i} onClick={()=>setOpen(prev => !prev)} >
          {item}
        </motion.a>
      })}
    </motion.div>
  )
}

export default Links
