import styles from "./resume.module.css"

const Resume = () => {

    return (
        <section className={styles.education}>
            <h2 className="heading">
                Res<span>ume</span>
            </h2>
                   
            <div className={styles.educationrow}>
            
           {/*<div className={styles.educationcolumn}>
                <h3 className={styles.title}>Personal Information</h3>


            <div className={styles.personal_info_column}>
                <div className={styles.personal_info}>
                <div className={styles.bluetext}>
                    Name
                </div>
                <div className={styles.info_value}>
                     Oniyide Damilola Victoria
                </div>
                </div>

                <div className={styles.personal_info}>
                    <div className={styles.bluetext}>
                        Contact Information
                    </div>
                    <div className={styles.info_value}>
                        +2348129709027
                    </div>
                </div>

                <div className={styles.personal_info}>
                    <div className={styles.bluetext}>
                        Email Address
                    </div>
                    <div className={styles.info_value}>
                        damilolaoniyide11@gmail.com
                    </div>
                </div>

                <div className={styles.personal_info}>
                    <div className={styles.bluetext}>
                        LinkedIn 
                    </div>
                    <div className={styles.info_value}>
                        Damilola Oniyide
                    </div>
                </div>
            </div>
    </div>   */}
            <div className={styles.educationcolumn}>
                    <h3 className={styles.title}>Skills</h3>

                    <div className={styles.educationbox}>

                        <div className={styles.educationcontent}>
                            <div className={styles.content}>
                                <div className={styles.bluetext}>
                                    Languages
                                </div>
                                <h3>
                                  Javascript, Typescript, HTML, CSS
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
                                 React, Next.JS
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
                            <div className="flex flex-col lg:flex-row justify-between ">
                            <div>
                            <h3 className={styles.developer_title}>
                                Doyenify - Front End Developer Intern
                            </h3>
                             <p className={styles.bluetext}>                    
                                Remote
                           </p>
                            </div>
                            
                           <p className={`${styles.bluetext} lg:mt-7`}>
                                {/* react icon for calendar */}
                                July 2023 - October 2023
                           </p>
                            </div>

                           
                            {/* talk about work experience */}
                            <ul className={styles.work_xperience_list}>
                                <li>Developed UI/UX components for customer facing web applications from scratch to enhance scalability, performance and user experience</li>
                                <li>Performed code reviews, unit testing and continuous integration to maintain code quality standards</li>
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

                                <h3>
                                  Relevant Coursework
                                </h3>
                                <p className={styles.bluetext}>
                                    {/* react icon for calendar */}
                                    Data Structures and Algorithm
                                </p>
                            </div>
                        </div>

            
                    </div>
                </div>
                       
              
            </div>

        </section>
    )
}
export default Resume;