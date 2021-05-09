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

    .inputSubmit{
        width: 80px;
        margin-left: 10px;
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: 2px solid rgb(64, 115, 158, .7);
        color: #353b48;
        font-size: 15px;
        font-weight: 700;
        position: relative; 
    }
    
    ::before {
        content: '';
        position: absolute;
        margin-left: 327px;
        border-radius: 5px;
        margin-top: 7px;
        background: linear-gradient(0.45turn, rgba(64, 115, 158, .7), rgba(253, 150, 68, .5));
        width: 0;
        height: 41px;
        transition: .3s ease-in;
    }

    :hover::before{
        width: 61px;
    }

`;