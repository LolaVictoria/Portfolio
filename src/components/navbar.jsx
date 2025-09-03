import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { NavLink } from "react-router-dom";



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
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : undefined
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : undefined
                    }
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : undefined
                    }
                  >
                    Resume
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/articles"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : undefined
                    }
                  >
                    Articles
                  </NavLink>
                </li>
              </ul>
            </nav>

        </div>
    )
}
export default Navbar