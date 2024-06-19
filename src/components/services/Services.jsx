import './services.css';
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className='services'>
      <div className="ser-text">
        <p>
            I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </div>
      <div className="ser-ttl">
        <img className='ser-img' src="/people.webp" alt="" />
        <h1>
            <b>Unique</b> Ideas
        </h1>
      </div>      
      <div className="ser-ttl">
        <h1>
            <b>For Your</b> Business.
        </h1>
        <button>WHAT WE DO?</button>
      </div>

      <div className="ser-list">
        <div className="box">
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non voluptates illum nihil nisi necessitatibus. Asperiores, quis culpa hic consequuntur consequatur rerum id laboriosam ipsa nobis, minima doloremque, error magnam.
            </p>
            <button>Go</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non voluptates illum nihil nisi necessitatibus. Asperiores, quis culpa hic consequuntur consequatur rerum id laboriosam ipsa nobis, minima doloremque, error magnam.
            </p>
            <button>Go</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non voluptates illum nihil nisi necessitatibus. Asperiores, quis culpa hic consequuntur consequatur rerum id laboriosam ipsa nobis, minima doloremque, error magnam.
            </p>
            <button>Go</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non voluptates illum nihil nisi necessitatibus. Asperiores, quis culpa hic consequuntur consequatur rerum id laboriosam ipsa nobis, minima doloremque, error magnam.
            </p>
            <button>Go</button>
        </div>
      </div>
    </div>
  )
}

export default Services
