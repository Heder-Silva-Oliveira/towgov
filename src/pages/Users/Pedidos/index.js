import React, { Component } from "react";
import Container from "../../../compoments/Container"
import { BsChevronCompactUp} from "react-icons/bs";
import {Box, Form, Field, File,Legend, Input, InputBox, TexteArea, Button, Label, Span } from './styles'


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
                                <Label>Digite o assunto:</Label>
                                <Input type="text"  placeholder="Assunto" autofocus/>
                                <Label>Descreva seu pedido.</Label>
                                <TexteArea  placeholder="Seu pedido"></TexteArea>
                                           
                                <Button onclick="pedido.salvar()"><BsChevronCompactUp/>   Enviar</Button>
                                <File></File>
                                <Span>Arraste seu arquivo aqui.</Span>

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