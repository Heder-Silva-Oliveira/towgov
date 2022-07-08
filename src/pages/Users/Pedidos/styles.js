import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    width: 100%;
    height: 100vw;
    background-color: #f1fbff;
    align-items:center ;
    justify-content: center;
`;

export const Form = styled.form`
    width: 80%;
    height: 80%;
    background-color: #f1fbff;
`;

export const Field = styled.fieldset`
    border: 2px solid #e4dfdf;
    border-radius: 5px;

`;

export const Legend = styled.legend`
    color: #f1fbff;
    border: 1px solid  #46555a;
    font-size: 15px;
    padding: 4px;
    background-color: #46555a;
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
    color: #32343f;
`;

export const TexteArea = styled.textarea`
    display: block;
    height: 400px;
    width: 98%;
    border-radius: 8px;
    border-color: #e4dfdf;
    outline: none;
    font-family: 'Varela Round', sans-serif;
    color: #32343f;
    resize: none;

`;

export const Button = styled.button`
    text-align:inherit;
    border-radius: 5px;
    width: 15%;
    padding: 8px;
    margin-top: 15px;
    margin-bottom: 5px;
    display:block ;
    color: #e3f7ff;
    border: none;
    margin-left: 5%;
    background-color: #313b3f;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    outline: none;
    :hover{
        background-color:#46555a;
    }
`;

export const Label = styled.label`
    display: block;
    font-family: 'Varela Round', sans-serif;
    margin-top: 15px;

`;
export const Span = styled.span`
    display: block;
    font-family: 'Varela Round', sans-serif;
    margin-left:555px;

`;

export const File = styled.input`
    padding: 10px 10px 10px 10px;
    margin-left:550px;
    outline: none;
`;