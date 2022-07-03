import React, { Component } from "react";
import Container from "../../../compoments/Container"
import { BsChevronCompactUp} from "react-icons/bs";
import {Box, Form, Field, Legend, Input, InputBox, TexteArea, Button} from './styles'


class Pedidos extends React.Component{
    render(){
        return(
            <>

                <Container>
                    <Box>
                    <Form action=""> 
                        <Field>
                            <Legend><b>Sua Solicitação</b></Legend>
                            
                            <InputBox>
                            
                                <Input type="text"  placeholder="Assunto" autofocus/>
                                <TexteArea  placeholder="Seu pedido"></TexteArea>
                                
                                <Button onclick="pedido.salvar()"><BsChevronCompactUp/>   Enviar</Button>
                            </InputBox> 
                        </Field>
                    </Form> 
                    </Box>
                </Container>
                    
                                
           </>

        )
    }

}
export default Pedidos