import styles from "./project.module.css"
import PropTypes from "prop-types";  // Import PropTypes
import {IoEyeSharp} from "react-icons/io5"
import {FaCodeBranch} from "react-icons/fa"

const ProjectComponent = ({about, title, tools, code, live, projectImg}) => {

    return (
        
        
        <div className={styles.projectcolumn}>
                    <p className={styles.title}>{title}</p>
                    <img src={projectImg} alt="" className={styles.project_img} />
                    <p className={styles.about}>
                        {about}
                    </p>

                    <p className={styles.tools}>{tools}</p>
                    <div className={styles.btndiv}>
                    <a href={code} rel="noopener">
                   <button className={styles.btn}>
                        <span>
                        <FaCodeBranch size={15}/>
                        </span>
                        <span>Code</span>
                   </button>
                    </a>
                    <a href={live} rel="noopener">
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


ProjectComponent.propTypes = {
    title: PropTypes.string.isRequired, 
    about: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    projectImg: PropTypes.string.isRequired
  };
  