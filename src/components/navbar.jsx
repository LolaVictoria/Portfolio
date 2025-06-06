import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";



const Navbar = () => { 
   const [nav, setNav] = useState(false)
   

    return (
        <div className={styles.navbar}>
          <div className={styles.logo_container}>
            <p className={styles.logo}>Lola Victoria</p>
            <div className={styles.menu} onClick={() => setNav(!nav)} aria-expanded={nav ? "true" : "false"}>
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
          </div>

            {nav && (
                <ul className={styles.responsive_list}>
                    <li className={styles.responsive_list_text}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.responsive_list_text}>
                        <Link to="/project">Project</Link>
                    </li>
                    <li className={styles.responsive_list_text}>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li className={styles.responsive_list_text}>
                        <Link to="/articles">Articles</Link>
                    </li>
                </ul>
            )}

           

            <nav className={styles.navlist}>
              <ul>

                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/project">Project</Link>
                    </li>


                    <li>
                      <Link to="/resume">Resume</Link>
                    </li>

                    <li>
                      <Link to="/articles">Articles</Link>
                    </li>

                   
             
              </ul>
                
            </nav>
        </div>
    )
}
export default Navbar