import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";



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