import React, { Component } from "react";
import Container from "../../../compoments/Container"
import { } from "react-icons/bs";
import {Box, Div, List, TopList, H1, H1a} from './styles'


class Arquivos extends React.Component{
    render(){
        return(
            <>
             <Container>
                <Box>
                    <Div>
                        <TopList>
                            <H1>Data</H1>
                            <H1>Assunto</H1>
                            <H1>Status</H1>
                            <H1>Numero</H1>
                            <H1>Baixar</H1>
                            
                        </TopList>
                        <List>
                            <H1a>01/01/2022</H1a>
                            <H1a>Pedido de alteração cadastral</H1a>
                            <H1a>Em analise</H1a>
                            <H1a>15422</H1a>
                            <H1a>-*-*-*</H1a>
                        </List>
                    </Div>

                </Box>
            </Container>
                    
            </>

        )
    }

}
export default Arquivos         