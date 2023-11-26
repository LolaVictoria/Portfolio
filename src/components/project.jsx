import styles from "./project.module.css"

const  Project = () => {
    return (
        <div>
            <h2 className="heading">
                Pro<span>ject</span>
            </h2>
            
            <div className={styles.project}>
                
                 <div className={styles.projectcolumn}>

                 </div>

                <div className={styles.projectcolumn}>

                </div>

                <div className={styles.projectcolumn}>

                 </div>
            </div>
        </div>
    )
}
export default Project