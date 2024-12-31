import Navbar from "./navbar";
import styles from "./resume.module.css";

const Resume = () => {
    

    // Skills
    const skills = [
        { category: "Languages", details: "Javascript, Typescript, HTML, CSS" },
        { category: "Framework/Libraries", details: "React, Next.JS" },
        { category: "Tools", details: "Git, Firebase" },
    ];

    // Experiences
    const experiences = [
        {
            title: "Doyenify - Front End Developer",
            location: "Remote",
            duration: "April 2024 - Dec 2024",
            responsibilities: [
                "Developed the DoyenKids platform from scratch, delivering a user-friendly educational application designed for young learners and their guardians. Achieved a 40% increase in user engagement within the first 3 months by implementing an intuitive interface and interactive learning features.",
                 "Contributed to the development of the MVP version of YungDoyen, integrating core features and functionalities essential for an early-stage product launch. Delivered the MVP on schedule, resulting in a 20% increase in early-stage sign-ups and meeting 100% of the project’s critical feature requirements"
            ],
        },
       
        {
            title: "Software Studio, ICT Centre - Front End Developer",
            location: "Remote",
            duration: "Jan 2024 - April 2024",
            responsibilities: [
                "Designed and implemented user-friendly interfaces to present Clinical Decision Support Systems (CDSS) for clinical recommendations, using Next.JS. Achieved a 25% reduction in user error rates through simplified UI/UX design.",
                "Integrated backend APIs to provide seamless data retrieval and functionality for clinical workflows, ensuring 99.9% uptime and enabling real-time updates for healthcare professionals."

            ],
        },
        
    ];
    

    // Education
    const education = [
        {
            degree: "B.Sc Computer Science with Mathematics",
            institution: "Obafemi Awolowo University",
            year: "2025",
            
        },
    ];

    return (
        <>
            <Navbar/>
        
        <section className={styles.education}>
            <h2 className="heading">
                Res<span>ume</span>
            </h2>

            <div className={styles.educationrow}>
                {/* Personal Information */}
                {/* Personal Information */}
{/* <div className={styles.educationcolumn}>
    <h3 className={styles.title}>Personal Information</h3>
    <div className={styles.educationbox}>
        {personalInfo.map((info, index) => (
            <div className={styles.educationcontent} key={index}>
                <div className={styles.content}>
                    <div className={styles.bluetext}>{info.label}</div>
                    <p className={styles.info_value}>{info.value}</p>
                </div>
            </div>
        ))}
    </div>
</div> */}


                {/* Skills */}
                <div className={styles.educationcolumn}>
                    <h3 className={styles.title}>Skills</h3>
                    <div className={styles.educationbox}>
                        {skills.map((skill, index) => (
                            <div className={styles.educationcontent} key={index}>
                                <div className={styles.content}>
                                    <div className={styles.bluetext}>{skill.category}</div>
                                    <h3>{skill.details}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div className={styles.educationcolumn}>
                    <h3 className={styles.title}>Experience</h3>
                    <div className={styles.educationbox}>
                        {experiences.map((experience, index) => (
                            <div className={styles.educationcontent} key={index}>
                                <div className={styles.content}>
                                    <div className="flex flex-col lg:flex-row justify-between">
                                        <div>
                                            <h3 className={styles.developer_title}>
                                                {experience.title}
                                            </h3>
                                            <p className={styles.bluetext}>{experience.location}</p>
                                        </div>
                                        <p className={`${styles.bluetext} lg:mt-7`}>
                                            {experience.duration}
                                        </p>
                                    </div>
                                    <ul className={styles.work_xperience_list}>
                                        {experience.responsibilities.map((task, i) => (
                                            <li key={i}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className={styles.educationcolumn}>
                    <h3 className={styles.title}>Education</h3>
                    <div className={styles.educationbox}>
                        {education.map((edu, index) => (
                            <div className={styles.educationcontent} key={index}>
                                <div className={styles.content}>
                                    <h3>
                                        {edu.degree} at {edu.institution}
                                    </h3>
                                    <div className={styles.bluetext}>{edu.year}</div>
                                    <h3 className={styles.bluetext}>Relevant Coursework</h3>
                                    <ul className={styles.work_xperience_list}>
                                    {edu.coursework.map((work, i) => (

                                    <li key={i}>{work}</li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Resume;
