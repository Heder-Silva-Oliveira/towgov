
import styled from "styled-components";

export const Form = styled.form`
	
	background-color: #1e2b36;
    margin-top: 50px;
    width: 100%;
    max-width: 380px;
    padding: .5rem;
    box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
    border-radius: 5px;
    height: 380px;    
`;

export const Input = styled.input`
    outline:5px solid rgb(35, 51, 63, .3);
    padding: 8px 20px;
    font-size: 16px;
    color:  #f6f5f7;
    height: auto;
    border-radius: 22px;
    background:  #23333f;
    box-shadow: inset 15px 15px 30px #1e2b36, inset -15px -15px 30px #283b48;
    ::placeholder{
    color: #7c858d;
    font-size: 12px;
    font-family: 'Varela Round', sans-serif;

  }

`;

export const Label = styled.label`
    color: #11f7e2;
    margin-left: -180px;
	padding-top: 8px;
    display: block;
    font-family: 'Varela Round', sans-serif;
   
`;


export const Title = styled.h1`
    font-family: 'Varela Round', sans-serif;
	text-align: center;
    color: #7c858d;

`;


export const Button =styled.button`
   
    border: none;
    padding: 8px 50px;
    font-size: 18px;
    border: 3px solid #23333f;
    color: #11f7e2;
    margin-top: 40px;
    border-radius: 22px;
    background: linear-gradient(145deg, #253743, #202e39);   
    cursor: pointer;
    :hover{
    box-shadow:   1px 1px 1px #11f7e2;
    }

`;



export const Back = styled.a`
	cursor: pointer;
    padding-right:  20px;
    font-size: 20px;

`;

export const Login = styled.div`
    text-align: center;
  	display: flex;
    flex-direction:column;
    align-items: center; 
    min-height: 100vh;
    padding: 0 2rem;
    background-color:#23333f;
    box-shadow: 0 2px 15px rgb(0, 0, 0, .5);
`;

export const CpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }





  
	
