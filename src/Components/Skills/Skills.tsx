import React from 'react'
import { FaAndroid } from 'react-icons/fa'
import { FaAngular, FaBootstrap, FaVuejs, FaReact, FaNode, FaLaravel } from 'react-icons/fa6'
import { SiMongodb } from 'react-icons/si'
import './Skills.css'

interface SkillCard {
  id: number
  name: string
  experience: string
  icon: React.ReactNode
  bgColor: string
}

const skillsData: SkillCard[] = [
  {
    id: 1,
    name: 'Android',
    experience: '2 Year Experience',
    icon: <FaAndroid />,
    bgColor: '#a4d65e'
  },
  {
    id: 2,
    name: 'Angular',
    experience: '1 Year Experience',
    icon: <FaAngular />,
    bgColor: '#dd3c52'
  },
  {
    id: 3,
    name: 'Bootstrap',
    experience: '3 Year Experience',
    icon: <FaBootstrap />,
    bgColor: '#7952b3'
  },
  {
    id: 4,
    name: 'Vue',
    experience: '2 Year Experience',
    icon: <FaVuejs />,
    bgColor: '#2d8659'
  },
  {
    id: 5,
    name: 'React',
    experience: '8 Months Experience',
    icon: <FaReact />,
    bgColor: '#61dafb'
  },
  {
    id: 6,
    name: 'MongoDB',
    experience: '3 Months Experience',
    icon: <SiMongodb />,
    bgColor: '#13aa52'
  },
  {
    id: 7,
    name: 'Laravel',
    experience: '1 Year Experience',
    icon: <FaLaravel />,
    bgColor: '#ff2d20'
  },
  {
    id: 8,
    name: 'Node.js',
    experience: '10 Months Experience',
    icon: <FaNode />,
    bgColor: '#68a063'
  }
]

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Experience</h2>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon-wrapper" style={{ backgroundColor: skill.bgColor }}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
              </div>
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-experience">{skill.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
