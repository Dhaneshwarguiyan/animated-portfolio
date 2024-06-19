import "./technical.css"
import { motion } from "framer-motion"

const items =[
    {
        image:"./react.webp",
        name:"React js"
    },
    {
        image:"./social.png",
        name:"Git"
    },
    {
        image:"./github.png",
        name:"Github"
    },
    {
        image:"./js.png",
        name:"javascript"
    },
    {
        image:"./css-3.png",
        name:"css"
    },
    {
        image:"./html-5.png",
        name:"html"
    },
]

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
        duration:0.5,
      }
    }
  }

const TechnicalSkils = () => {
  return (
    <motion.div className='tech'  initial="initial" whileInView="animate" variants={viewVariants} viewport={{amount:0.1}}>
        <motion.div className="heading" initial="initial" whileInView="animate" variants={viewVariants} viewport={{amount:0.2}}>{`</Technical Skills>`}</motion.div>
        <div className="tech-cards">
        {
            items.map((item,i)=>{
               return <motion.div className="tech-card" whileHover={{scale:1.05}}>
                <img className="tech-img" src={item?.image} alt="" />
                {item.name}
                </motion.div>
            })
        }
        </div>
    </motion.div>
  )
}

export default TechnicalSkils
