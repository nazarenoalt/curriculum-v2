import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
`

export const Button = styled.button`
  position: absolute;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  top: 10px;
  right: 10px;
  transition: all .3s;
  cursor: pointer;
  opacity: ${(props) => props.opacity ? 0 : 1};
  :hover {
    filter: brightness(0.9)
  }

  :active {
    opacity: 0.7;
  }
`