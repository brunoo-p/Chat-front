import styled from 'styled-components';

export const Container = styled.div`
   margin-bottom: 10px;
   display: flex;
   box-sizing: border-box;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px;
    max-width: 90%;
    word-wrap: break-word;
    margin: none;

    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 1px 1px #CCC;
`;

export const Text = styled.div`
    font-size 14px;
    margin: 5px 40px 5px 5px;
    color: #222;
`;

export const Date = styled.div`
    font-size: 10px;
    color: ${({ theme }) => theme.textDate};
    font-weight: 500;
    margin-right: 5px;
    text-align: right;f
    height: 15px;
    margin-top: -15px;
`;