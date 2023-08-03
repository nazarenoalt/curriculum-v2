import React from 'react'
import { Wrapper } from './Certifications'

const Certifications = ({ data }) => {
  return (
    <Wrapper>
        <h2 className="title-separator">Certifications</h2>
        {data.map(item => (
          <li key={item.title} className="Certifications__li">
            <h3 className="project-title">{item.title}</h3>

            <div className="project-content">
              <span>{item.date}</span>
            </div>
          </li>
        ))}
    </Wrapper>
  )
}

export default Certifications
