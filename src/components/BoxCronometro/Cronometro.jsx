import React from 'react'
import styled from 'styled-components'

const  CronometroStyled= styled.div`
    background-color: #9c5c5c;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    border-radius: 10px;
`
const ContenedorCronometro = ({children}) => {
  return <CronometroStyled>{children}</CronometroStyled>
}
export default ContenedorCronometro