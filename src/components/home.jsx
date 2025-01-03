import { Link } from "react-router-dom";
import styles from "./home.module.css"
import img from "/assets/damilola.png"
import {FaXTwitter} from "react-icons/fa6"
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import Navbar from "./navbar";

const Home = () => {

    return (
        <div className="lg:overflow-y-hidden">
        <Navbar />
    <div className={styles.home} id="home">
        <div className={styles.sub_home}>
             <div
                className={styles.img_div}
            >
                 <img 
                 src={img} 
                 className={styles.img}
                 alt="Damilola Oniyide" 
                 loading="lazy"
                 /> 

        <div className={styles.socials}>
            <a href="https://github.com/LolaVictoria" rel="noopener"><AiFillGithub /></a>
            <a href="https://linkedin.com/in/damilola-oniyide-9a013a205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener"><AiFillLinkedin/></a>
            <a href="https://x.com/1_and_only_lola" rel="noopener"><FaXTwitter /></a>
           </div>
            </div>

            <div className={styles.content}>

            <h1>
                Hello, I&apos;m 
                <span> Oniyide Damilola</span>
            </h1>

            <div className={styles.textAnimate}>
                <h3>Frontend Developer</h3>
            </div>

            <p>
            I am a front-end developer and a computer science student leveraging her knowledge of software development and experience to create solutions that address real-world problems. 
            I have contributed to impactful projects, such as a clinical decision support system to enhance healthcare delivery and an e-learning platform that teaches kids how to code.  
            
            </p>

            <div className={styles.btndiv}>
                   <button className={`${styles.btn} ${styles.btn_resume}`}>
                    <Link to="/resume">Resume</Link>
                   </button>

                   <button className={`${styles.btn} ${styles.btn_contact}`}>
                   <a href="mailto:damilolaoniyide11@gmail.com">
                    Contact Me
                 </a>
                   </button>
            </div>
            </div>
        </div>
           <div className={styles.socials_responsive}>
           <a href="https://github.com/LolaVictoria" rel="noopener"><AiFillGithub /></a>
            <a href="https://linkedin.com/in/damilola-oniyide-9a013a205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener"><AiFillLinkedin/></a>
            <a href="https://x.com/1_and_only_lola" rel="noopener"><FaXTwitter /></a>
           </div>
       
        </div>
        </div>
    )
}
export default Home;