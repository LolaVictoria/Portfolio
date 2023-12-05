import { Link } from "react-router-dom";
import styles from "./home.module.css"
//import img from "../assets/damilola.jpg"
const Home = () => {

    return (
        <div className={styles.home}>
            <div className={styles.content}>

            <h1>
                Hello , I&apos;m 
                <span> Oniyide Damilola</span>
            </h1>

            <div className={styles.textAnimate}>
                <h3>Frontend Developer</h3>
            </div>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum modi quis exercitationem a sed consectetur repudiandae, mollitia praesentium laudantium aliquam aspernatur asperiores tenetur error at molestias et, deserunt adipisci vel quia officiis blanditiis dignissimos necessitatibus. Quam numquam a dolor quaerat fugiat reprehenderit commodi ratione, qui magnam harum aperiam.
            </p>

            <div className={styles.btndiv}>
                   <button className={styles.btn}>
                    <Link to="/">Resume</Link>
                   </button>
            </div>
            </div>

            <div
                className={styles.img}
            >
                {/* <img 
                 src={img} alt="Damilola Oniyide" /> */}
            </div>

        </div>
    )
}
export default Home;