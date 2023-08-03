import React from 'react'
import { Wrapper } from './Experience.style'

const Experience = ({ data }) => {
  console.log(data.listItems)
  return (
    <Wrapper>
        <h2 className="title-separator">Experience</h2>
        {data.map(item => (
          <li key={item.title} className="Experience__li">
            <h3 className="project-title">{item.title} | {item.place}</h3>
            <small>{item.startDate} - {item.endDate ? item.endDate : "Present"}</small>
            <div className="project-content">
              <ul className="project-description">
                {item.description.map((descItem, index) => (
                  <li className="experience-list" key={index}>{descItem}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
    </Wrapper>
  )
}

export default Experience
