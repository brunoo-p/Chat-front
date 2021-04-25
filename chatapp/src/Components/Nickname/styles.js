import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 80%;
    max-width: 400px;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background: rgba(14,14,14,.6);
    padding 20px;
    
    border-radius: 15px;
    transition: 0.8s ease-out;
    filter: drop-shadow(0px 0px 1px rgba(240,240,240, .4));
    
    :hover{
        filter: drop-shadow(10px 5px 4px rgba(20,24,16, .5));
        //filter: drop-shadow(10px 5px 4px white);
        background: linear-gradient(rgba(245,245,242, .2), rgba(6,6,6,.4) 67.36%);
        border: 1px solid rgba(205,205,202, .2);
    }

    p{
        margin-top: 40px;
        cursor: pointer;
        color: #7d5fff;
        transition: 0.3s ease-in;

        :hover{
            color: white;
            filter: drop-shadow(0px 0px 1px rgba(240,240,240, .3));
            text-decoration: 2px underline #7d5fff
        }
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
        color: #CCC;
        margin-bottom: 20px;
    }

    input{
        display: flex;
        font-size: 16px;
        font-weight: 700;

        padding: 8px;
        color: #353b48;
        border-radius: 5px;
        border: 1px solid transparent;
        background: rgba(243,243,243, 0.9);
        margin-top: 15px;

        :focus{
            outline: none;
            border: 1px solid rgb(73,63,201);
        }
    }

    .btnSubmit{
        cursor: pointer;
        width: 80px;
        justify-content: center;
        transition: 0.4s ease-out;
        margin-top: 20px;

        :hover{
            background: rgba(73,63,201, 0.3);
            border: 1px solid rgba(240,240,240,.2);
            color: white;
        }
    }    
`;
