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
                     title="Ecommerce Store"
                     about="lorem35"
                     tools="Typescript + React + TailwindCSS"/>

               <ProjectComponent
                     title="Study Card"
                     about="A reading guide that helps you to study better"
                     tools="Javascript + React + TailwindCSS"/>

               <ProjectComponent
                     title="Quiz"
                     about="A Quiz App"
                     tools="Javascript + React + CSS"/>

               <ProjectComponent
                     title="Portfolio Website"
                     about="My Portfolio Website"
                     tools="Javascript + React + CSS"/>
            </div>
        </section>
    )
}
export default Project