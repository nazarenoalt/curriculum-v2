import React from 'react'
import { Wrapper } from './Body.style'

const Body = ({ children }) => {
  return (
    <Wrapper>
        {children.map(child => {
          return <div className='child-gap'>
            {child}
          </div>
        })}
    </Wrapper>
  )
}

export default Body
