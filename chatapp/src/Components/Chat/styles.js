import styled from 'styled-components';
import { CgToggleSquare, CgToggleSquareOff } from 'react-icons/cg';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background: ${({theme}) => theme.background};
    
    font-family: 'Roboto', sans serif;
    color: ${({theme}) => theme.text};
    transition: 0.5s linear;
`;

export const ToggleLight = styled(CgToggleSquare)`
    width: 30px;
    height: 30px;
    right: 45%;
    top: 2%;
    position: absolute;

    cursor: pointer;

    @media(min-width: 1024px){
        width: 40px;
        height: 40px;
        right: 20%;
        top: 40px;
    }

`;

export const ToggleDark = styled(CgToggleSquareOff)`
    width: 30px;
    height: 30px;
    right: 45%;
    top: 2%;
    position: absolute;

    cursor: pointer;
    
    @media(min-width: 1024px){
        width: 40px;
        height: 40px;
        right: 20%;
        top: 40px;
    }
`;

export const Wrapper = styled.aside`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 70%;
    max-height: 500px;
    border-radius: 20px;
    background: ${({theme}) => theme.wrapper};
    backdrop-filter: (5rem);
    border: 1px solid transparent;
    align-items: center;
    justify-content: space-around;

    @media(min-width: 1024px){
        padding: 70px;
        border: 1px solid ${({theme}) => theme.border};
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
    justify-content: space-evenly;
    border: 1px solid ${({theme}) => theme.border};
    
    padding: 15px 5px;
    border-radius: 15px;
    background:${({ theme }) => theme.body};
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