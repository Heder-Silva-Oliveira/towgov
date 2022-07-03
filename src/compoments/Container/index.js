import React, { Component } from "react";

import Footer from '../../compoments/Footer'
import Header from '../../compoments/Header';
import Column from "../../compoments/Column";

import {Content } from "./styles";

class Container extends  React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Header/>    
            <Content >
                <Column/>
   
                {this.props.children}                       
                               
                
            </Content>
            <Footer/>         
            </>

        )
    }
}

export default Container