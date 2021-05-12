import styled from 'styled-components';

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

        :focus{
            background: rgba(64, 74, 168, .2);
            border: 2px solid rgb(64, 115, 198);
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
    color: #353b48;
    
    font-size: 15px;
    font-weight: 700;
    position: relative;
    
    ::before {
        content: '';

        position: absolute;
        width: 0;
        height: 41px;
        margin-left: -7px;
        margin-top: -12px;

        border-radius: 5px;
        background: linear-gradient(0.45turn, rgba(64, 115, 158, .7), rgba(253, 150, 68, .5));
        

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
    }
    :focus{
        color: #60a3bc;
    }

`;
