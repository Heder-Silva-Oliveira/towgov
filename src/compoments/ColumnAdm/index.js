import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { BsColumnsGap, BsFileText, BsFolder2Open, BsGear, BsExclamationTriangle } from "react-icons/bs";
import {NavBar, Li, Ul, Span, Icon, Grupo } from "./styles";

class ColumnAdm extends React.Component{
    render(){
        return(
            <>
                    <NavBar>
                       <Grupo>
                          <Ul>
                             <Li>
                                <Icon></Icon> 
                                <Span>Admin</Span>                          
                            </Li>

                            <Link to="#" style={{ textDecoration: 'none' }}> 
                              <Li>
                                <Icon><BsColumnsGap/></Icon> 
                                  <Span>Painel</Span>                          
                                </Li>
                             </Link>
                              
                           
                            <Link to="#" style={{ textDecoration: 'none' }}> 
                              <Li>
                                <Icon><BsFileText/></Icon> 
                                  <Span>Pedidos</Span>                          
                                </Li>
                             </Link>
                              
                            <Link to="#" style={{ textDecoration: 'none' }}> 
                              <Li>
                               <Icon><BsFolder2Open/></Icon> 
                                  <Span>Arquivos</Span>                          
                                </Li>
                             </Link>
                             <Link to="#" style={{ textDecoration: 'none' }}> 
                              <Li>
                               <Icon><BsExclamationTriangle/></Icon> 
                                  <Span>Avisos</Span>                          
                                </Li>
                             </Link>
                             <Link to="#" style={{ textDecoration: 'none' }}> 
                              <Li>
                               <Icon><BsGear/></Icon> 
                                  <Span>Arquivos</Span>                          
                                </Li>
                             </Link>                                                            
                          </Ul>
                        </Grupo> 
                    </NavBar>
            </>
        )
    }
}

export default ColumnAdm