import styled, { css } from 'styled-components'

export const greyColor = css`
  background-color: #282a36;
  color: white;
`
const purpleColor = css`
  background-color: #bd93f9;
  color: white;
`
const whiteColor = css`
  color: white;
`

// ==============================================================

export const Main = styled.main`
  ${greyColor}
`

export const Button = styled.button<{ $reset?: boolean; }>`
    background: transparent;
    color: ${props => props.$reset ? "darkred" : "green"};

    font-size: 0.8rem;
    font-weight: bold;
    padding: 1rem 4rem;
    border: 2px solid ${props => props.$reset ? "darkred" : "green"};
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        color: ${props => props.$reset ? "red" : "lightgreen"};
        border: 2px solid ${props => props.$reset ? "red" : "lightgreen"};
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: 0.2s ease-out;
    }

    &:active {
        color: white;
        border: 2px solid white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px inset;
        transition: 0.2s ease-out;
    }
`;

export const Container = styled.div`
    width: 560px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
`

export const H1 = styled.h1`



`

export const H2 = styled.h2`


    text-align: center;
`

export const H3 = styled.h3`

    font-size: 0.9rem;
    text-transform: uppercase;
    font-family: Roboto, Arial, serif;
    text-align: center;
`

export const H4 = styled.h4`

    font-size: 0.7rem;
    text-transform: uppercase;
    font-family: Roboto, Arial, serif;
    text-align: center;
`

