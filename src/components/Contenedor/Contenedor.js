import React from 'react'
import styled from 'styled-components'

const ContenedorStyled = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100vh;
    width: 100vw;
    background:grey;
`

const Contenedor = ({children}) => {
  return <ContenedorStyled>{children}</ContenedorStyled>
}

export default Contenedor
