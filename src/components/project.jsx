import styles from "./project.module.css"
import ProjectComponent from "./projectComponent"
import alabaMarket from "/alaba-market.jpeg"
import cdss from "/cdss.jpeg"
import portfolio from "/portfolio.jpeg"
import Navbar from "./navbar"
import YungDoyen from "/yungdoyen.jpeg"
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
                     title="Yung Doyens"
                     about="A platform for kids to enrol and develop a tech skill"
                     tools="Typescript + React + TailwindCSS + Firebase"
                     live="https://yung.doyenify.com/"
                     code=""
                     projectImg={YungDoyen}/>
                 
                 <ProjectComponent
                     title="Ecommerce Store"
                     about="An online marketplace to Sell and Buy"
                     tools="Typescript + React + TailwindCSS + Firebase"
                     live="https://alaba-market.vercel.app" 
                     code="https://github.com/LolaVictoria/E-Commerce-Store"
                     projectImg ={alabaMarket}/>

                <ProjectComponent
                     title="CDSS"
                     about="Clinical Decison Support System"
                     tools="Typescript + NextJS+ React + CSS"
                     live="https://cdss-frontend-one.vercel.app/"
                     code=""
                     projectImg={cdss}/>

               

             

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