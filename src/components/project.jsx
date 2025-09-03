import styles from "./project.module.css"
import ProjectComponent from "./projectComponent"
import alabaMarket from "/alaba-market.jpeg"
import cdss from "/cdss.jpeg"
import portfolio from "/portfolio.jpeg"
import Navbar from "./navbar"
import YungDoyen from "/yungdoyen.jpeg"
import BlockVerify from "/block-verify.png"

const projects = [
  {
    title: "BlockVerify",
    about: "Blockchain-based product authentication system",
    tools: "TypeScript + React + TailwindCSS + Flask + Solidity + MongoDB",
    live: "https://blockchain-verification-esup.vercel.app/",
    code: "",
    projectImg: BlockVerify,
  },
  {
    title: "YungDoyens",
    about: "Platform for kids to enroll and develop tech skills",
    tools: "TypeScript + React + TailwindCSS + Firebase",
    live: "https://yung.doyenify.com/",
    code: "",
    projectImg: YungDoyen,
  },
  {
    title: "E-Commerce Store",
    about: "Online marketplace for buying and selling",
    tools: "TypeScript + React + TailwindCSS + Firebase",
    live: "https://alaba-market.vercel.app",
    code: "https://github.com/LolaVictoria/E-Commerce-Store",
    projectImg: alabaMarket,
  },
  {
    title: "CDSS",
    about: "Clinical Decision Support System",
    tools: "TypeScript + NextJS + React + CSS",
    live: "https://cdss-frontend-one.vercel.app/",
    code: "",
    projectImg: cdss,
  },
  {
    title: "Portfolio",
    about: "Personal portfolio website",
    tools: "JavaScript + React + CSS",
    live: "https://lolas-portfolio.vercel.app",
    code: "https://github.com/LolaVictoria/Portfolio",
    projectImg: portfolio,
  },
]

const Project = () => {
  return (
    <>
      <Navbar />
      <section id="project">
        <h2 className="heading">
          Pro<span>ject</span>
        </h2>

        <div className={styles.project}>
          {projects.map((project, index) => (
            <ProjectComponent
              key={index}
              title={project.title}
              about={project.about}
              tools={project.tools}
              live={project.live}
              code={project.code}
              projectImg={project.projectImg}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Project
