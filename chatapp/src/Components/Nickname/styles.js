import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 80%;
    max-width: 400px;
    height: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background: rgba(14,14,14,.5);
    padding 20px;
    border-radius: 15px;
    box-shadow: 0 2px 3px #CCC;

    label{
        font-size: 18px;
        font-weight: 700;
        color: #CCC;
    }

    input{
        display: flex;
        font-size: 16px;
        font-weight: 700;

        padding: 8px;
        border-radius: 5px;
        border: none;
        background: rgba(243,243,243, 0.9);

        :focus{
            outline: none;
            background: rgba(214, 162, 232, 2);
        }
    }
`;
