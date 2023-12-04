import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { useState } from "react"


const Navbar = () => { 
   const [nav, setNav] = useState(false)

    return (
        <div className={styles.navbar}>
            <p className={styles.logo}>Lola Victoria</p>

            <p
              className={styles.menu}
              onClick={
                () => setNav(!nav)
              }>
              {nav ? "X" : "%"}
            </p>

            
            {nav ?
                 <nav className={styles.navlist_responsive}>
                  <p
              className={styles.menu_responsive}
              onClick={
                () => setNav(!nav)
              }>
              {nav ? "X" : "%"}
            </p>
              
              <ul>

                 <li className="active">
                   <Link to="">Home</Link>
                 </li>

                 <li>
                   <Link to="">Project</Link>
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
                      <Link to="">Home</Link>
                    </li>

                    <li>
                      <Link to="">Project</Link>
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