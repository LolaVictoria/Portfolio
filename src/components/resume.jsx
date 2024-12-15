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
                "Collaborated with backend developers to integrate RESTful APIs into front-end applications, ensuring seamless data communication.",
                "Enhanced JavaScript and React skills by working on real-world projects under the mentorship of senior developers.",
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
                "Collaborated closely with the backend team to integrate Firebase for real-time database interactions and ensure smooth application functionality.",
                "Developed reusable React components to streamline development and maintain consistency across the platform's design system.",
                "Implemented key functionalities, such as user authentication (Google OAuth), dynamic dashboard navigation, and real-time updates, to enhance platform usability.",
                "Worked with payment integration (Stripe) to support secure transactions for course enrollments and other services.",
                "Monitored and optimized performance, improving page load speeds and ensuring minimal downtime during development cycles.",
                "Participated in iterative development cycles, continuously refining features based on feedback from stakeholders and early users.",
                "Contributed to the platform's scalability by adopting modern development practices, including state management using Context API.",
                "Ensured compliance with accessibility standards to make the platform inclusive and easy to use for a diverse audience.",
                "Provided post-deployment support, debugging issues in production and implementing quick fixes to ensure a smooth user experience.",
                "Collaborated in Agile sprints with cross-functional teams, including designers, project managers, and other developers, to deliver features on time.",
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
