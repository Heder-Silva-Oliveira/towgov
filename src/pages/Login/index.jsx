import React, {useState} from 'react'
import Header from '../../compoments/Header'
import "./login.css"

const LoginPage = () => {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', cpf, password);
    };
    return(
        <>     
            <Header/>           
            <div id="login">
                <h1 className='title'>Login</h1>
                <form className="form" onSubmit={HandleSubmit}> 
                    <div className="field"/>
                        <label htmlFor='text'>CPF</label>
                        <input type="text" nome="CPF" placeholder="CPF" maxLength="14" autoFocus value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
                    <div/>
                    <div className="field"/>   
                        <label htmlFor='password'>Senha</label>
                        <input type="password" nome="Senha" placeholder="Sua senha" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <div/>
                    <div className="actions"/>   
                        <button className='but' type="submit">Entrar</button>
                    <div/>
                </form>
            </div>
            </>
    )
}
export default LoginPage