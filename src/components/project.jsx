import styles from "./project.module.css"
import ProjectComponent from "./projectComponent"
import alabaMarket from "/alaba-market.jpeg"
import cdss from "/cdss.jpeg"
import studyCard from "/study-card.jpeg"
import portfolio from "/portfolio.jpeg"
import Navbar from "./navbar"
const  Project = () => {
    return (
        <>
            <Navbar/>
       
        <section id="project">
            <h2 className="heading">
                Pro<span>ject</span>
            </h2>
            
            <div className={styles.project}>
                
                 
                 <ProjectComponent
                     title="Ecommerce Store"
                     about="Sell and Buy"
                     tools="Typescript + React + TailwindCSS + Firebase"
                     live="https://alaba-market.vercel.app" 
                     code="https://github.com/LolaVictoria/E-Commerce-Store"
                     projectImg ={alabaMarket}/>

                <ProjectComponent
                     title="CDSS"
                     about="Clinical Decison Support System"
                     tools="Typescript + NextJS+ React + CSS"
                     live="https://cdss-frontend-one.vercel.app/"
                     code="https://github.com/oau-cdss/cdss-frontend"
                     projectImg={cdss}/>

               <ProjectComponent
                     title="Study Card"
                     about="A study card platform designed to elevate your learning experience."
                     tools="Javascript + React + TailwindCSS"
                     live="https://study-card-project.vercel.app"
                     code="https://github.com/LolaVictoria/Study-Card"
                     projectImg={studyCard}/>

               {/* <ProjectComponent
                     title="Quiz"
                     about="A Quiz App"
                     tools="Javascript + React + CSS"
                     live="https://study-card-project.vercel.app"
                     code="https://github.com/LolaVictoria/Study-Card"/> */}

               <ProjectComponent
                     title="Portfolio Website"
                     about="My Portfolio Website"
                     tools="Javascript + React + CSS"
                     live="https://lolas-portfolio.vercel.app"
                     code="https://github.com/LolaVictoria/Portfolio"
                     projectImg={portfolio}/>
 
               
            </div>
        </section>
        </>
    )
}
export default Project