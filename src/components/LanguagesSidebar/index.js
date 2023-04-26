import React from 'react'
import { Wrapper } from './LanguagesSidebar'

const LanguagesSidebar = ({ languages }) => {
  return (
    <Wrapper>
      <div className="item">
        <h2>Languages</h2>
        <ul>
        {languages.map(item => (
          <li key={item}>
            <span>{item.languageName} ({item.level})</span>
          </li>
        ))}
        </ul>
        
      </div>
    </Wrapper>
  )
}

export default LanguagesSidebar
