import React from 'react'
import Header from '../../compoments/Header';

import {CpfMask,Login, Form, Input, Label,Title,Button } from "./styles"


class LoginPage extends React.Component {
  
        
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
        <Login>
            <Form>
             
                <Title>Login</Title>
                <Label>CPF</Label>
                <Input  maxLength='14'
                        name='documentId'
                        value={documentId}
                        onChange={this.handlechange} placeholder="Digite seu cpf">
                </Input>
           
                <Label>Senha</Label>
                <Input type="password" placeholder="Digite sua senha"> 
                </Input>
                
                <Button>Entrar</Button>        
                
              
            </Form> 
        </Login>
             
        </>

        
    )
    }
};
export default LoginPage