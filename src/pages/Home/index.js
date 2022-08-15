import React, { Component } from 'react';
import Container from '../../compoments/Container'
import Lban from '../../compoments/Img/Figure/logo-bande.png';
import Lcar from '../../compoments/Img/Figure/logo-car.png';
import Lpar from '../../compoments/Img/Figure/logo-paran.png';
import Lmon from '../../compoments/Img/Figure/logo-mverd.png';


import {Logo, Div,Page, Img } from "./styles";
import Footer from '../../compoments/Footer';
import Header from '../../compoments/Header';
import Fund from '../../compoments/Img/Figure/fund.jpg'


class Home extends  React.Component{
    render(){
        return(
            <>
            <Header></Header> 
            <Page>
                <Img src={Fund}/>
                    <Logo>
                        <Div>
                            <a href="https://www.novamonteverde.mt.gov.br/"><img src={Lban}/></a>
                            <a href="https://www.carlinda.mt.gov.br/"><img src={Lcar}/></a>
                            <a href="https://www.novabandeirantes.mt.gov.br/"><img src={Lmon}/></a>
                            <a href="https://www.paranaita.mt.gov.br/"><img src={Lpar}/></a>               
                        </Div>            
                    </Logo> 
            </Page>
            <Footer></Footer>
               
               

              

            </>

        )
    }
 }
 
 export default Home