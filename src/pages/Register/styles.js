import styled from "styled-components";

export const Box = styled.div`
margin-left: 20%;
    align-items: center;
    text-align: center;
    background-color:  #23333f;
    padding: 5px;
    width: 58%;
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const H1 =styled.h1`
    font-family: 'Varela Round', sans-serif;
	text-align: center;
    color: #7c858d;
`;
export const Inputs = styled.input`
    outline:5px solid rgb(35, 51, 63, .3);
    color:  #f6f5f7;
    box-shadow: inset 15px 15px 30px #1e2b36, inset -15px -15px 30px #283b48;
    background:  #23333f;
	width: 40%;
	margin-bottom: 20px;
    padding: 8px 20px;
	box-sizing: border-box;
	border-radius: 10px;
	outline: none;
	box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
    ::placeholder{
    color: #7c858d;
    font-size: 12px;}

`;

export const Inputm = styled.input`
    outline:5px solid rgb(35, 51, 63, .3);
    color:  #f6f5f7;
    box-shadow: inset 15px 15px 30px #1e2b36, inset -15px -15px 30px #283b48;
    background:  #23333f;
	width: 90%;
	margin-bottom: 20px;
    padding: 8px 20px;
	box-sizing: border-box;
	border-radius: 10px;
	outline: none;
	box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
    ::placeholder{
    color: #7c858d;
    font-size: 12px;}

`;
export const Div = styled.div`
    font-size: small;
    justify-content: left;
    width: 70vw;
    color: #11f7e2;
    text-align: center;



`;

export const Button =styled.button`
    
    border: solid 1px;
    padding: 8px 50px;
    font-size: 18px;
    border: 3px solid #23333f;
    color: #11f7e2;
    margin-top: 40px;
    border-radius: 22px;
    background: linear-gradient(145deg, #1e2b35, #1e2b36);   
    cursor: pointer;
    :hover{
    box-shadow:   1px 1px 1px #11f7e2;
    text-shadow: 0px 0px 8px #11f7e2;
    }
`;

export const Form = styled.form`
    font-family: 'Varela Round', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem 2rem 2rem;
    background-color:#23333f;
    box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
`;



