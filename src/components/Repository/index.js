import React from 'react'
import { Wrapper } from './Repository.style'

const Repository = ({ data }) => {
  return (
    <Wrapper>
        <h2 className="title-separator">Projects</h2>
        {data.map(item => (
          <li key={item.title} className="Repository__li">
            <h3 className="project-title">{item.title}</h3>

            <div className="project-content">
              <span>{item.content}</span>
              <p className="project-description">
                <a target="_blank" href={`https://www.${item.link}`}>{item.link}</a>
              </p>
            </div>
          </li>
        ))}
    </Wrapper>
  )
}

export default Repository
