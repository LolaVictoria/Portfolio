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
                     tools="Typescript + React + TailwindCSS"
                     liveCode="https://alaba-market.vercel.app"/>

               <ProjectComponent
                     title="Study Card"
                     about="A reading guide that helps you to study better"
                     tools="Javascript + React + TailwindCSS"
                     liveCode="https://study-card-project.vercel.app"/>

               <ProjectComponent
                     title="Quiz"
                     about="A Quiz App"
                     tools="Javascript + React + CSS"
                     liveCode="https://study-card-project.vercel.app"/>

               <ProjectComponent
                     title="Portfolio Website"
                     about="My Portfolio Website"
                     tools="Javascript + React + CSS"
                     liveCode="https:lolas-portfolio.vercel.app"/>
            </div>
        </section>
    )
}
export default Project