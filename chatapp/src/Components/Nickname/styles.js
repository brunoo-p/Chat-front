import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 80%;
    max-width: 400px;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;

    backdrop-filter: blur(3px);
    border: 1px solid white;
    padding 20px;
    
    border-radius: 15px;
    
    transition: 0.5s ease-out;
    animation: move 1.5s infinite;


    @keyframes move {
        0% {transform: translateY(0)}
        50% {transform: translateY(-5%)}
        100% {transform: translateY(0%)}
    }

    :hover{
        backdrop-filter: blur(15px);
        animation: none;
    }

    p{
        margin-top: 40px;
        cursor: pointer;
        color: rgba(64, 74, 168, .7);
        transition: 0.3s ease-in;

        :hover{
            color: blue;
            text-decoration: 2px underline #7d5fff;
        }
    }


    &.logged{
        transition: 0.5s ease-in;
        transform: translateY(150%);
    }
`;
    

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    jistify-content: center;

    label{
        font-size: 22px;
        font-weight: 700;
        color: rgba(64, 74, 168);
        margin-bottom: 20px;
    }

    input{
        display: flex;
        font-size: 16px;
        font-weight: 700;

        padding: 8px;
        color: #353b48;

        border: 2px solid transparent;
        border-radius: 5px;
        border: 1px solid transparent;
        background: rgba(243,243,243, 0.9);
        margin-top: 15px;

        :focus{
            outline: none;
            border: 2px solid rgb(64, 115, 198, .6);
        }
    }
    .inputLogin{
        text-align: center;
    }

    .btnSubmit{
        cursor: pointer;
        width: 80px;
        justify-content: center;
        transition: 0.4s ease-out;
        margin-top: 20px;
        border: 2px solid #60a3bc;
        
        :hover{
            background: rgba(7,6,6, .4);

            color: white;
        }
    }    
`;
