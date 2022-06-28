import React from "react";
import Header from "../../compoments/Header";

import "./register.css"

 const Register =() => {
    return(
        <>     
        <Header/>           
        <div id="logi">
             <form className="form" > 
                <h1 className='title'>cadastro</h1>           
                <div className="field"/>
                    <label for="cpf">CPF</label>
                    <input id = "cpf" name="cpf" placeholder="Digite seu CPF" maxlength="14" autofocus></input>
                    <label for="senha">Cadastre sua senha:</label>
                    <input id ="senha" nome="senha" placeholder="Digite a senha " ></input>
                    <label for="senhatwo">COnfirme a senha:</label>
                    <input id ="senhatwo" nome="senha" placeholder="Digite a senha " ></input>
                    <label for="cel">Qual seu numero para contato?</label>
                    <input id ="cel" nome="celular" placeholder="Digite o numero e telefone" ></input>
                    <label for="textpref">Identifique a prefeitura:</label>
                    <input id ="textpref" nome="prefeitura" placeholder="Digite o nome a prefeitura" ></input>
                    <label for="textdep">Qual departamento?</label>
                    <input id ="textdep" nome="departamento" placeholder="Digite o departamento" ></input>
                    <label for="textfun">Qual função?</label>
                    <input id ="textfun" nome="funcao" placeholder="Digite a função" ></input>
                    <label for="textede">Qual é o e-mail do departamento?</label>
                    <input id ="textede" nome="email_dep" placeholder="Digite o e-mail do departamento" ></input>
                    <label for="textepe">Qual é o seu e-mail pessoal?</label>
                    <input id ="textepe" nome="email_pes" placeholder="Digite o e-mail pessoal" ></input>
                <div className="field"/>             
                <div className="actions"/>
                    <button className='but' type="submit">Cadastrar</button>
                <div/>   
                    
            </form>
        </div>
        </>
    )              
 }
 export default Register