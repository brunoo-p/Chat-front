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

    transform: scale(1);
    animation: showChat 3s ease-in;


    @keyframes showChat {
        0% { 
            background: black;
            clip-path: polygon(36% 40%, 52% 46%, 63% 58%, 51% 58%, 40% 59%, 31% 58%, 40% 46%);
        }
        10% { 
            background: black;
            clip-path: polygon(46% 40%, 52% 46%, 63% 58%, 51% 58%, 40% 59%, 31% 58%, 40% 46%);
        }
        20% {
            clip-path: polygon(46% 40%, 52% 46%, 63% 58%, 51% 58%, 40% 59%, 31% 58%, 0 28%);
        }
        30% {
            clip-path: polygon(46% 40%, 52% 46%, 63% 58%, 51% 58%, 40% 59%, 0 85%, 0 28%);
        }
        40% {
            clip-path: polygon(46% 40%, 91% 9%, 63% 58%, 51% 58%, 40% 59%, 0 85%, 0 28%);
        }
        50% {
            clip-path: polygon(46% 40%, 91% 9%, 100% 67%, 51% 58%, 40% 59%, 0 85%, 0 28%);
        }
        60% {
            clip-path: polygon(46% 40%, 91% 9%, 100% 67%, 58% 100%, 43% 83%, 0 85%, 0 28%);
        }
        70% {
            clip-path: polygon(0 0, 91% 9%, 100% 67%, 58% 100%, 43% 83%, 0 85%, 0 28%);
        }
        80% {
            background: black;
            clip-path: polygon(0 0, 92% 0, 100% 67%, 58% 100%, 0 100%, 0 85%, 0 28%);
        }
        90% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 58% 100%, 0 100%, 0 85%, 0 28%);
        }
        100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 58% 100%, 0 100%, 0 85%, 0 28%);
        }
    };
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
    align-items: center;
    backdrop-filter: (5rem);

    border-radius: 20px;
    border: 1px solid transparent;

    background: ${({theme}) => theme.wrapper};
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

    transition: .8s ease-in;
    animation: lines 3s linear;

    @keyframes lines {
        0% {
            border: 2 solid transparent;
        }
        100% {
            border: 2px solid rgb(64, 115, 198, .8);
        }
    }
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