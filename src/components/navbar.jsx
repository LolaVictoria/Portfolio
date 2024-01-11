import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {FaXTwitter} from "react-icons/fa6"
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"


const Navbar = () => { 
   const [nav, setNav] = useState(false)
   

    return (
        <div className={styles.navbar}>
            <p className={styles.logo}>Lola Victoria</p>

            <div
              className={styles.menu}
              onClick={
                () => setNav(!nav)
              }>
               
              {nav ? 
              <AiOutlineClose size={30}/> 
              : <AiOutlineMenu size={30}/>}
            </div>

            
            {nav ?
            <nav className={styles.navlist_responsive}>
                  
            {/* <div 
              className={styles.menu_responsive}
              onClick={(e) => {
                  e.preventDefault()
                  navigate(-1)
                }}>
              <AiOutlineClose size={30}/> 
            </div> */}

            {/* <div
              className={styles.menu_responsive}
              onClick={
                () => setNav(!nav)
              }>
               
              {nav ? 
              <AiOutlineClose size={30}/> 
              : <AiOutlineMenu size={30}/>}
            </div> */}
              
              <ul>

                 <li className="active">
                   <Link to="home">Home</Link>
                 </li>

                 <li>
                   <Link to="#project">Project</Link>
                 </li>


                 <li>
                   <Link to="">Resume</Link>
                 </li>

                 <li>
                 <Link to="/contact">Contact</Link>
                 </li>
                 
                 <div className={styles.social_box}>
                  <h3>Connect With Me</h3>
                 <a href="mailto:damilolaoniyide11@gmail.com">
                  damilolaoniyide11@gmail.com
                 </a>
                 <div className={styles.socials}>
            <a href="https://github.com/LolaVictoria" rel="noopener"><AiFillGithub /></a>
            <a href="https://linkedin.com/in/damilola-oniyide-9a013a205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener"><AiFillLinkedin/></a>
            <a href="https://x.com/1_and_only_lola" rel="noopener"><FaXTwitter /></a>
           </div>
                 </div>
              </ul>
          
             
         </nav> : ""}
           

            <nav className={styles.navlist}>
              <ul>

                    <li className="active">
                      <Link to="home">Home</Link>
                    </li>

                    <li>
                      <Link to="#project">Project</Link>
                    </li>


                    <li>
                      <Link to="">Resume</Link>
                    </li>

                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
             
              </ul>
                
            </nav>
        </div>
    )
}
export default Navbar