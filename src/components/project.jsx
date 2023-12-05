import styles from "./project.module.css"
import ProjectComponent from "./projectComponent"

const  Project = () => {
    return (
        <section>
            <h2 className="heading">
                Pro<span>ject</span>
            </h2>
            
            <div className={styles.project}>
                
                 
                 <ProjectComponent
                     title="EcommerceStore"
                     about="lorem35"
                     tools="Typescript + React + TailwindCSS"/>

               <ProjectComponent
                     title="Study Card"
                     about="lorem35"
                     tools="Javascript + React + TailwindCSS"/>

               <ProjectComponent
                     title="Quiz"
                     about="lorem35"
                     tools="Javascript + React + CSS"/>

               <ProjectComponent
                     title="Portfolio Website"
                     about="lorem35"
                     tools="Javascript + React + CSS"/>
            </div>
        </section>
    )
}
export default Project