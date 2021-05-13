import styled from 'styled-components'

export const Input = styled.input`
  background-color: #FFF;
  border: 3px solid #FFF;
  border-radius: 4px;
  box-shadow: 1px 1px 8px -2px rgba(0,0,0,.2);
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  padding: 1.3em;
  transition: all .2s;
  width: 100%;

  :hover {
    background-color: #FAFAFA;
    border-color: #FAFAFA;
  }
  :focus {
    background-color: #FFF;
    border-color: #0080FF;
    box-shadow: none;
    outline: none;
  }
`
