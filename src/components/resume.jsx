import styles from "./resume.module.css"

const Resume = () => {

    return (
        <section className={styles.education}>
            <h2 className="heading">
                Res<span>ume</span>
            </h2>
                   
                   {/* Experience */}
            <div className={styles.educationrow}>

            <div className={styles.educationcolumn}>
                <h3 className={styles.title}>Experience</h3>

                <div className={styles.educationbox}>
                    <div className={styles.educationcontent}>
                        <div className={styles.content}>
                           <div className={styles.year}>
                                {/* react icon for calendar */}
                                July 2023 - October 2023
                           </div>
                            <h3>
                                Doyenify - Front End Developer Intern
                            </h3>
                            {/* talk about work experience */}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore similique vero delectus rem ullam, explicabo, optio totam eligendi animi, magni vel.</p>
                        </div>
                      </div>
                </div>

            </div>
        
                    
                    {/* Education */}
            
                <div className={styles.educationcolumn}>
                    <h3 className={styles.title}>Education </h3>

                    <div className={styles.educationbox}>

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <div className={styles.year}>
                                    {/* react icon for calendar */}
                                    2025
                                </div>
                                <h3>
                                  B.Sc Computer Science with Mathematics at Obafemi Awolowo University
                                </h3>
                            </div>
                        </div>

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <div className={styles.year}>
                                    {/* react icon for calendar */}
                                    2017
                                </div>
                                <h3>
                                  Genius Royal Academy, Ibadan
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
            

        </section>
    )
}
export default Resume;