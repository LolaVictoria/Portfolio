import styles from "./resume.module.css";

const Resume = () => {
    const personalInfo = [
        { label: "Name", value: "Oniyide Damilola Victoria" },
        { label: "Contact Information", value: "+2348129709027" },
        { label: "Email Address", value: "damilolaoniyide11@gmail.com" },
        { label: "LinkedIn", value: "Damilola Oniyide" },
    ];

    const skills = [
        { category: "Languages", details: "Javascript, Typescript, HTML, CSS" },
        { category: "Framework/Libraries", details: "React, Next.JS" },
        { category: "Tools", details: "Git, Firebase" },
    ];

    const experiences = [
        {
            title: "Doyenify - Front End Developer Intern",
            location: "Remote",
            duration: "July 2023 - October 2023",
            responsibilities: [
                "Developed UI/UX components for customer-facing web applications from scratch to enhance scalability, performance, and user experience.",
                "Performed code reviews, unit testing, and continuous integration to maintain code quality standards.",
            ],
        },
        {
            title: "Doyenify - Front End Developer",
            location: "Remote",
            duration: "April 2024 - Present",
            responsibilities: [
                "Developed UI/UX components for customer-facing web applications from scratch to enhance scalability, performance, and user experience.",
                "Performed code reviews, unit testing, and continuous integration to maintain code quality standards.",
            ],
        },
    ];

    const education = [
        {
            degree: "B.Sc Computer Science with Mathematics",
            institution: "Obafemi Awolowo University",
            year: "2025",
            coursework: "Data Structures and Analysis of Algorithm",
        },
    ];

    return (
        <section className={styles.education}>
            <h2 className="heading">
                Res<span>ume</span>
            </h2>

            <div className={styles.educationrow}>
                {/* Personal Information */}
                <div className={styles.educationcolumn}>
                    <h3 className={styles.title}>Personal Information</h3>
                    <div className={styles.personal_info_column}>
                        {personalInfo.map((info, index) => (
                            <div className={styles.personal_info} key={index}>
                                <div className={styles.bluetext}>{info.label}</div>
                                <div className={styles.info_value}>{info.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

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
                                    <h3>{edu.degree} at {edu.institution}</h3>
                                    <div className={styles.bluetext}>{edu.year}</div>
                                    <h3>Relevant Coursework</h3>
                                    <p className={styles.bluetext}>{edu.coursework}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
