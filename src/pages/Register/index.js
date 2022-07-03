import React from "react";
import Header from "../../compoments/Header";
import Footer from "../../compoments/Footer";
import {CpfMask} from "../Login/styles"

import {Inputs, Inputm, Button, H1, Form, Div} from "./styles"



class Register  extends React.Component {

    
constructor(props) {
    super(props)

    this.state = { documentId: '' }
    this.handlechange = this.handlechange.bind(this)
    }

    handlechange(e) {

    this.setState({ documentId: CpfMask(e.target.value) })
    }

    render() {
    const { documentId } = this.state
    return (   
        <> 
        <Header/>                         
             <Form>
                <Div>
                    <H1>Cadastro</H1>           
                            <label for="cpf">CPF</label>
                            <br></br>
                            <Inputm id = "cpf"
                            maxLength='14'
                            name='documentId'
                            value={documentId}
                            onChange={this.handlechange}
                            placeholder="Digite seu cpf"                                             
                            autofocus></Inputm>
                            <br></br>

                        <label for="senha">Cadastre sua senha:</label>
                        <br></br>
                        <Inputm id ="senha"  type="password"  nome="senha" placeholder="Digite a senha " ></Inputm>
                        <br></br>
                        <label for="senhatwo">Confirme a senha:</label>
                        <br></br>
                        <Inputm id ="senhatwo"  type="password"  nome="senha" placeholder="Digite a senha " ></Inputm>
                        <br></br>
                        <label for="cel">Qual seu numero para contato?</label>
                        <br></br>
                        <Inputm id ="cel" nome="celular" placeholder="Digite o numero e telefone" ></Inputm>
                        <br></br>
                        <label for="textpref">Identifique a prefeitura:</label>
                        <br></br>
                        <Inputs id ="textpref" nome="prefeitura" placeholder="Digite o nome a prefeitura" ></Inputs>
                        <br></br>
                        <label for="textdep">Qual departamento?</label>
                        <br></br>
                        <Inputs id ="textdep" nome="departamento" placeholder="Digite o departamento" ></Inputs>
                        <br></br>
                        <label for="textfun">Qual função?</label>
                        <br></br>
                        <Inputs id ="textfun" nome="funcao" placeholder="Digite a função" ></Inputs>
                        <br></br>
                        <label for="textede">Qual é o e-mail do departamento?</label>
                        <br></br>
                        <Inputs id ="textede" nome="email_dep" placeholder="Digite o e-mail do departamento" ></Inputs>
                        <br></br>
                        <label for="textepe">Qual é o seu e-mail pessoal?</label>
                        <br></br>
                        <Inputs id ="textepe" nome="email_pes" placeholder="Digite o e-mail pessoal" ></Inputs>
                    <div className="field"/>             
                    <div className="actions"/>
                        <Button className='but' type="submit">Cadastrar</Button>
                    <div/>   
                                        
                </Div> 

            </Form>
        <Footer/>
        </>
    )              
 }
}
 export default Register