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
                     live="https://alaba-market.vercel.app" 
                     code="https://github.com/LolaVictoria/E-Commerce-Store" />

               <ProjectComponent
                     title="Study Card"
                     about="A reading guide that helps you to study better"
                     tools="Javascript + React + TailwindCSS"
                     live="https://study-card-project.vercel.app"
                     code="https://github.com/LolaVictoria/Study-Card"/>

               <ProjectComponent
                     title="Quiz"
                     about="A Quiz App"
                     tools="Javascript + React + CSS"
                     live="https://study-card-project.vercel.app"
                     code="https://github.com/LolaVictoria/Study-Card"/>

               <ProjectComponent
                     title="Portfolio Website"
                     about="My Portfolio Website"
                     tools="Javascript + React + CSS"
                     live="https://lolas-portfolio.vercel.app"
                     code="https://github.com/LolaVictoria/Portfolio"/>
            </div>
        </section>
    )
}
export default Project