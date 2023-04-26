import React from 'react'
import { Wrapper } from './Experience.style'

const Experience = ({ data }) => {
  return (
    <Wrapper>
        <h2 className="title-separator">Experience</h2>
        {data.map(item => (
          <li key={item.title} className="Experience__li">
            <h3 className="project-title">{item.title} | {item.place}</h3>
            <small>{item.startDate} - {item.endDate ? item.endDate : "present"}</small>
            <div className="project-content">
              <p className="project-description">
                {item.description}
              </p>
            </div>
          </li>
        ))}
    </Wrapper>
  )
}

export default Experience
