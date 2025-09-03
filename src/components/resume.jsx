import Navbar from "./navbar";
import styles from "./resume.module.css";

const Resume = () => {
  // Skills
  const skills = [
    { category: "Programming Languages", details: "JavaScript, TypeScript, Python, Solidity" },
    { category: "Frameworks & Libraries", details: "React, Vue, TailwindCSS, Framer Motion, GraphQL" },
    { category: "Tooling/Databases", details: "Git, Firebase, MongoDB, PostgreSQL, GraphQL" },
  ];

  // Experiences
  const experiences = [
    {
      title: "Frontend Engineer - Doyenify",
      location: "Remote",
      duration: "07/2023 – 07/2025",
      responsibilities: [
        "Spearheaded the development of YungDoyen MVP from scratch using React and TypeScript, resulting in a 60% increase in early sign-ups and successful completion of 100% of project milestones.",
        "Implemented a high-converting 'Try a Free Class' feature, which led to a 3× increase in user registrations and a 64% boost in paid class conversions.",
        "Built a feature-rich Child Dashboard integrating user progress tracking and course details improving user engagement by 2×.",
        "Developed a responsive Support Page for issue reporting and user feedback, cutting down average response time by 75%.",
        "Engineered backend authentication system using Node.js and Express.js to handle parent and child account roles ensuring secure and role-specific access control.",
      ],
    },
    {
      title: "Frontend Engineer - Freelance",
      location: "Remote",
      duration: "01/2024 – 05/2024",
      responsibilities: [
        "Led frontend development, launching v1 for 60+ users at rollout.",
        "Implemented clinician and patient dashboards with real-time session tracking reducing scheduling errors by 45%.",
        "Reduced the need for physical diagnosis by 40% by integrating an interactive quiz for pre-diagnosis assessment.",
      ],
    },
  ];

  // Education
  const education = [
    {
      degree: "B.Sc. Computer Science with Mathematics",
      institution: "Obafemi Awolowo University",
      year: "2025",
      coursework: [
        "Data Structures and Algorithms",
        "Principles and Applications of Data Mining",
        "Object-Oriented Programming",
        "Operating Systems",
        "Software Engineering Techniques",
        "Principles of Compiler",
        "Digital Computer Networks",
        "Object Oriented Modeling",
        "Database Design and Management",
      ],
    },
  ];

  // Projects
  const projects = [
    {
      title: "Alaba Market",
      description:
        "Developed a seller dashboard supporting 7+ product categories and a buyer shopping cart, improving marketplace efficiency. Optimized Firebase Firestore queries, reducing database load time by 35%.",
      technologies: "TypeScript, React, Firebase",
    },
    {
      title: "BlockVerify",
      description:
        "Developed a blockchain-based product verification system enabling manufacturers to integrate authentication features and allowing consumers to verify product authenticity. Built a React.js frontend and Flask backend for seamless interaction, and implemented Solidity smart contracts on the Ethereum Sepolia testnet to ensure transparent, tamper-proof verification.",
      technologies: "TypeScript, React, Flask, Solidity, Ethereum (Sepolia Testnet)",
    },
  ];

  return (
    <>
      <Navbar />

      <section className={styles.education}>
        <h2 className="heading">
          Res<span>ume</span>
        </h2>

        <div className={styles.educationrow}>
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

          {/* Projects */}
          <div className={styles.educationcolumn}>
            <h3 className={styles.title}>Projects</h3>
            <div className={styles.educationbox}>
              {projects.map((project, index) => (
                <div className={styles.educationcontent} key={index}>
                  <div className={styles.content}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.bluetext}>
                      Technologies: {project.technologies}
                    </div>
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
