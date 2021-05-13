import styled from 'styled-components';
import fundo from '../../Assets/fundo.jpg';

export const Container = styled.aside`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    z-index: 9999;

    font-family: Roboto, sans serif;

    background: url(${fundo});
    background-origin: border-box;
    background-position: center;

    @media(min-width: 1024px){
        background-repeat: repeat;
        background-origin: border-box;
        background-position: left;
    }
`;