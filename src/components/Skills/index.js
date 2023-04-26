import React from 'react'
import { Wrapper } from './Skills.style'

const Skills = ({ hardSkills, softSkills }) => {
  return (
    <Wrapper>
    <div className="item">
      <h2>Skills</h2>
      <ul>
        {hardSkills.map(item => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    </Wrapper>
  )
}

export default Skills
