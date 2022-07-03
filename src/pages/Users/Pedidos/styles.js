import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    width: 100%;
    height: 100vw;
    background-color: blue;
    align-items:center ;
    justify-content: center;
`;

export const Form = styled.form`
    width: 80%;
    height: 80%;
    background-color: aliceblue;
`;

export const Field = styled.fieldset`
    border: 2px solid #e4dfdf;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgb(88, 86, 86);

`;

export const Legend = styled.legend`
    color: #f5f6fa;
    border: 1px solid  #696b74;
    padding: 4px;
    background-color: #696b74;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgb(0, 0, 0, 1);
    font-family: 'Varela Round', sans-serif;

`;

export const InputBox = styled.div`
    width: auto;
`;

export const Input = styled.input`
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    width: 70%;
    border-color: #e4dfdf;
    font-family: 'Varela Round', sans-serif;
    color: #1e2b36;
`;

export const TexteArea = styled.textarea`
    display: block;
    height: 400px;
    width: 98%;
    border-radius: 8px;
    border-color: #e4dfdf;
    outline: none;
    font-family: 'Varela Round', sans-serif;
    color: #1e2b36;
    resize: none;

`;

export const Button = styled.button`
    text-align:inherit;
    border-radius: 5px;
    width: 15%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    display:block ;
    color: #4d614d;
    border: none;
    margin-left: 5%;
    background-color: #62ba6e;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    outline: none;
    :hover{
        background-color:#fff;
    }
`;