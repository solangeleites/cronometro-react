import styled from "styled-components";

export const TimeCronometro = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    height:180px;
    
    & span {
        font-size:2rem;
    }
`

export const ButtonCronometro = styled.button`
    background:transparent;
    border-radius:10px;
    width:100px;
    height:50px;
    border:2px solid black;
    font-size:1rem;
    color: white;
    cursor: pointer;
    outline:none;

    :hover{
        background:black;
    }
    `