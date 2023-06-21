import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    margin: 0;
    padding: 0;
    box-size: border-box;
`
export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const Navegacao = styled.nav`
flex-basis: 200px;
border-right-style: solid;
border-right-width: thin;
`
