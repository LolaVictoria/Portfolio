import Navbar from "./navbar";
import styles from "./resume.module.css";

const articlesData = [
    {
        "title": "Implement a Service Worker with Workbox in a PWA - FreeCodeCamp",
        "link": "https://www.freecodecamp.org/news/implement-a-service-worker-with-workbox-in-a-pwa/"
    },
    {
        "title": "Performance Optimization Techniques for Front-End Developers",
        "link": "https://medium.com/@damilolaoniyide11/performance-optimization-techniques-for-front-end-developers-ca965cff0543"
    },
    {
        "title": "Destructuring Arrays and Objects in Javascript",
        "link": "https://medium.com/@damilolaoniyide11/destructuring-arrays-and-objects-in-javascript-a5421c633c0f"
    },
    {
        "title": "Understanding Functions In JavaScript — The Basics",
        "link": "https://medium.com/@damilolaoniyide11/understanding-functions-in-javascript-the-basics-4d9fb9cb4959"
    },
    {
        "title": "Effective Applications of AI in the Learning Process.",
        "link": "https://medium.com/@damilolaoniyide11/effective-applications-of-ai-in-the-learning-process-18bcc66f4698"
    },
    {
        "title": "Leveraging AI in your job.",
        "link": "https://medium.com/@damilolaoniyide11/leveraging-ai-in-your-job-76fe6dfd4925"
    },
    {
        "title": "Important Meta Tags For Search Engine Optimization",
        "link": "https://medium.com/@damilolaoniyide11/important-meta-tags-for-search-engine-optimization-6699888da9d7"
    },
    
]

const Articles = ( ) => {
    return (
         <>
         <Navbar/>

          <section>
            <h2 className="heading">
               Arti<span>cles</span>
            </h2>

            <div>
            <ul className={styles.article}>
                {articlesData.map((article, index) => (
                    <li key={index} className={styles.article_list}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer" >
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>


            </div>
            </section>

         </>
    )
}
export default Articles;