import styled, { css } from 'styled-components'

export const mainBgc = css`
  background-color: #282a36;
`
export const borderColor = css`
  #bd93f9;
`
const mainTextColor = css`
  color: white;
`

// ==============================================================

export const Main = styled.main`
  ${mainBgc};
  ${mainTextColor};
`

export const Button = styled.button<{ $header?: boolean; }>`
    background-color: transparent;
    width: ${props => props.$header ? "100%" : "none"};
    ${mainTextColor};
    font-size: 0.8rem;
    padding: 0.5rem;
    min-width: 5rem;
    border: none;
    outline: 2px solid ${borderColor};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: ${borderColor};
      outline: 2px solid #dac4f8;
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    }

    &:active {
        outline: 2px solid #dac4f8;
    }
`;

export const Container = styled.div`
    width: 560px;
    height: 100%;
    margin: 0 auto;
`

export const AddItemField = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const H1 = styled.h1`
    text-align: center;
    margin: 24px 0;

`

export const H2 = styled.h2`
    margin: 24px 0;
`

export const H3 = styled.h3`
    font-weight: 400;
    font-size: 1.3rem;
    margin: 0;
`