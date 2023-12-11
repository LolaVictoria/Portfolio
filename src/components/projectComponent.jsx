import { Link } from "react-router-dom"
import Demo from "../assets/demo.png"
import styles from "./project.module.css"
import PropTypes from "prop-types";  // Import PropTypes
import {IoEyeSharp} from "react-icons/io5"
import {FaCodeBranch} from "react-icons/fa"

const ProjectComponent = ({about, title, tools, liveCode}) => {

    return (
        <div className={styles.projectcolumn}>
                    <p className={styles.title}>{title}</p>
                    <img src={Demo} alt="" className={styles.project_img} />
                    <p className={styles.about}>
                        {about}
                    </p>

                    <p className={styles.tools}>{tools}</p>
                    <div className={styles.btndiv}>
                    <Link to="">
                   <button className={styles.btn}>
                        <span>
                        <FaCodeBranch size={15}/>
                        </span>
                        <span>Code</span>
                   </button>
                    </Link>
                    <a href={liveCode} rel="noopener">
                   <button className={styles.btn}>
                        <span>
                        <IoEyeSharp size={20} />
                        </span>
                        <span>Live</span>
                   </button>
                    </a>
            </div>

                 </div>
    )
}
export default ProjectComponent;

// Add prop type validation
ProjectComponent.propTypes = {
    title: PropTypes.string.isRequired, // Assuming title is a required string
    about: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    liveCode: PropTypes.string.isRequired
  };
  