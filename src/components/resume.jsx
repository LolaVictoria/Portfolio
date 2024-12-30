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
            title: "Doyenify - Front End Developer Intern",
            location: "Remote",
            duration: "July 2023 - October 2023",
            responsibilities: [
                "Designed and implemented responsive UI/UX components for customer-facing web applications, enhancing usability and accessibility.",
                "Participated in requirement gathering and analysis to understand project objectives and user needs, ensuring alignment with business goals.",
                "Enhanced JavaScript and React skills by working on real-world projects under the mentorship of senior developers."
            ],
        },
        {
            title: "Software Studio, ICT Centre - Front End Developer",
            location: "Remote",
            duration: "Jan 2024 - April 2024",
            responsibilities: [
                "Designed and implemented user-friendly interfaces to present CDSS for clinical recommendations clearly and intuitively from scratch.",
                "Leveraging Next.JS its server-side rendering and API routes for optimal performance and scalability.",
                "Integrated backend APIs to provide seamless data retrieval and functionality for clinical workflows."
            ],
        },
        {
            title: "Doyenify - Front End Developer",
            location: "Remote",
            duration: "April 2024 - Present",
            responsibilities: [
                "Built the DoyenKids platform from scratch, delivering a user-friendly educational application tailored for young learners and their guardians.",
                "Designed and implemented pixel-perfect, responsive UI components that adapt seamlessly across mobile, tablet, and desktop devices.",
                "Contributed to the development of the MVP version of the DoyenKids platform by integrating core features and functionalities required for early-stage product launch.",
                " Integrated Firebase Firestore for efficient data storage and real-time updates across platforms.",
                "Implemented secure payment gateways using Stripe for seamless transactions.",
                "Designed and built reusable components with React.js and TypeScript, improving development efficiency.",
                "Collaborated with cross-functional teams to deliver key features, including user dashboards, profile management, and course discovery.",
                "Ensured optimal user experience by leveraging modern web technologies and implementing best practices.",
                "Collaborated in Agile Methodology with cross-functional teams, including designers, project managers, and other developers, to deliver features on time.",
            ],
        },
    ];
    

    // Education
    const education = [
        {
            degree: "B.Sc Computer Science with Mathematics",
            institution: "Obafemi Awolowo University",
            year: "2025",
            coursework: ["Data Structures and Analysis of Algorithm",
                         "Introduction to Information Systems",
                         "Operating Systems Principles",
                        "Techniques in Software Engineering",
                          ],
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
