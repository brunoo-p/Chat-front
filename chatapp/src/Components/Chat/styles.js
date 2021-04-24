import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    
    background: #7d5fff;
    font-family: 'Roboto', sans serif;
`;

export const Wrapper = styled.aside`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 400px;
    height: 70%;
    align-items: center;
    justify-content: space-around;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 400px;
    height: 80%;
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