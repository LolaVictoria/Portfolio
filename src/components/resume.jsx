import styles from "./resume.module.css"

const Resume = () => {

    return (
        <section className={styles.education}>
            <h2 className="heading">
                Res<span>ume</span>
            </h2>
                   
            <div className={styles.educationrow}>
                
            <div className={styles.educationcolumn}>
                    <h3 className={styles.title}>Skills</h3>

                    <div className={styles.educationbox}>

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <div className={styles.bluetext}>
                                    Languages
                                </div>
                                <h3>
                                  Javascript, Typescript
                                </h3>
                            </div>
                        </div>

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <div className={styles.bluetext}>
                                    {/* react icon for calendar */}
                                    Framework/Libraries
                                </div>
                                <h3>
                                 React
                                </h3>
                            </div>
                        </div>

                        {/* <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <div className={styles.bluetext}>
                                    Databases/Storage
                                </div>
                                <h3>
                                    MongoDB
                                </h3>
                            </div>
                        </div> */}

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <div className={styles.bluetext}>
                                    Tools
                                </div>
                                <h3>
                                  Git
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            

                   {/* Experience */}
            <div className={styles.educationcolumn}>
                <h3 className={styles.title}>Experience</h3>

                <div className={styles.educationbox}>
                    <div className={styles.educationcontent}>
                        <div className={styles.content}>
                            <h3>
                                Doyenify - Front End Developer Intern
                            </h3>
                           <div className={styles.bluetext}>
                                {/* react icon for calendar */}
                                July 2023 - October 2023
                           </div>
                            {/* talk about work experience */}
                            <ul>
                                <li>Developed a  Web Application from scratch  with Typescript and React</li>
                            </ul>

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
                                <h3>
                                  B.Sc Computer Science with Mathematics at Obafemi Awolowo University
                                </h3>
                                <div className={styles.bluetext}>
                                    {/* react icon for calendar */}
                                    2025
                                </div>
                            </div>
                        </div>

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <h3>
                                  Genius Royal Academy, Ibadan
                                </h3>
                                <div className={styles.bluetext}>
                                    {/* react icon for calendar */}
                                   July 2017
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                       
              

              <div className={styles.educationcolumn}>
                    <h3 className={styles.title}>Others</h3>

                    <div className={styles.educationbox}>

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <h3>
                                 Hobbies
                                </h3>
                                <div className={styles.bluetext}>
                                    {/* react icon for calendar */}
                                    Exploring,  Reading
                                </div>
                            </div>
                        </div>

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <h3>
                                  Genius Royal Academy, Ibadan
                                </h3>
                                <div className={styles.bluetext}>
                                    {/* react icon for calendar */}
                                   July 2017
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                       
            </div>

        </section>
    )
}
export default Resume;