import React from 'react'
import "./styles.css"

const LoginPage = () => {
    return(
        <div id="login">
            <h1>Login</h1>
            <form className='form'> 
                <div className='field'/>
                    <label htmlFor='cpf'>CPF</label>
                    <input type="text" nome="CPF" placeholder="CPF" maxlength="14" autofocus></input>
                <div/>
                <div className='field'/>   
                    <label htmlFor='senha'>Senha</label>
                    <input type="password" nome="Senha" placeholder="Sua senha"></input>
                <div/>
                <div className='actions'/>   
                    <input id="logar" type="button" onclick="login()" value="Entrar"></input>
                <div/>
            </form>
        </div>
    )
}
export default LoginPage