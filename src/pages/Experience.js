import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
      skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2021 - 2023",
      description: "Built and maintained multiple web applications, working with cross-functional teams.",
      skills: ["JavaScript", "Python", "PostgreSQL", "Docker"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2021",
      description: "Created responsive and interactive user interfaces for various client projects.",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Sass"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "Django", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] }
  ];

  return (
    <div className="experience">
      <div className="experience-content">
        <h1 className="experience-title">Experience & Skills</h1>
        <p className="experience-subtitle">My professional journey and technical expertise</p>

        <section className="work-experience">
          <h2>Work Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University of Technology</p>
            <span className="graduation-year">2020</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience; 