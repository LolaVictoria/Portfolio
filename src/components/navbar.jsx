import { Link } from "react-router-dom"
import styles from "./navbar.module.css"


const Navbar = () => { 

    return (
        <div className={styles.navbar}>
            <p className={styles.logo}>Lola Victoria</p>

            <nav className={styles.navlist}>
                    <p className="active">
                      <Link to="">Home</Link>
                    </p>

                    <p>
                      <Link to="">Project</Link>
                    </p>


                    <p>
                      <Link to="">Resume</Link>
                    </p>

                    <p>
                    <Link to="/contact">Contact</Link>
                    </p>
             
                
            </nav>
        </div>
    )
}
export default Navbar