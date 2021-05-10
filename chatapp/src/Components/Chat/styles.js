import styled from 'styled-components';
import fundo from '../../Assets/fundo.jpg';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    
    background: rgb(6,6,6);
    background: url(${fundo});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    font-family: 'Roboto', sans serif;
`;

export const Wrapper = styled.aside`
    display: flex;
    flex-direction: column;
    width: 87%;
    height: 70%;
    max-height: 500px;
    border-radius: 20px;
    background: rgba(4,4,4,.1);
    backdrop-filter: blur(4px);
    align-items: center;
    justify-content: space-around;

    @media(min-width: 1024px){
        padding: 70px;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 400px;
    height: 80%;
    max-height: 400px;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    padding: 15px 5px;
    border-radius: 15px;
    background: rgba(245,245,240, 0.95);
`;

export const Contact = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    align-items: center;
    justify-content: center;

    color: white;
    font-weight: 700;
    background: rgba(87, 96, 111, .8);
    filter: drop-shadow(0px 0px 3px white);
    border-radius: 10px;
    border: 1px solid white;
    
`;