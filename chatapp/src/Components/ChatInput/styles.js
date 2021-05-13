import styled from 'styled-components';
import { FaMicrophoneAlt } from 'react-icons/fa';

export const Form = styled.form`
    margin: 0;
    width: 100%;
    display: flex;
    
    input{
        border-radius: 8px;
        border: none;
        margin-top: 5px;

        :focus{
            outline: none;
        }
    }
    .inputMessage{
        width: 100%;
        padding: 8px;

        border: 2px solid transparent;
        font-size: 15px;
        font-weight: 700;
        transition: 0.3s ease-out;
        color: ${({theme}) => theme.text};
        letter-spacing: 1px;

        :focus{
            background: rgba(64, 74, 168,.2);
            border: 2px solid ${({theme}) => theme.borderInput};
        }
    }
    
`; 

export const WriteMessage = styled.div`
    display: flex;
    width: 100%;
    height: 95%;
    border-radius: 15px;
    justify-content: space-between;
    padding: 5px;
`;
export const SendMessage = styled.button`
    width: 80px;


    margin-top: 5px;
    margin-left: 10px;
    padding: 5px;
    
    cursor: pointer;
    
    background: transparent;
    border: 2px solid #60a3bc;
    border-radius: 8px;
    color: ${({theme}) => theme.text};
    
    font-size: 15px;
    font-weight: 700;
    position: relative;
    
    ::before {
        content: "";
        position: absolute;

        margin-left: -8px;
        border-radius: 5px;
        margin-top: -12px;
        background: linear-gradient(0.45turn, rgba(64, 115, 158, .7), rgba(253, 150, 68, .5));
        width: 0px;
        height: 41px;
        color: #60a3bc;
        transition: .2s ease-in;
    }

    &:hover::before{
        width: 61px;
    }

`;

export const MicIcon = styled(FaMicrophoneAlt)`
    width: 28px; 
    height: 28px;
    margin: 15px 5px 0 10px;
    padding: 0 10px;

    cursor: pointer;
    transition: 0.2s ease-in;

    :hover{
        color: #60a3bc;
        backdrop-filter: drop-shadow(1px 0 5px blue);
    }
    :focus{
        color: #60a3bc;
    }
`;