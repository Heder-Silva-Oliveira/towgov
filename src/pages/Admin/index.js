import React, { Component } from 'react';
import Footer from '../../compoments/Footer'
import ColumnAdm from '../../compoments/ColumnAdm';
import Header from '../../compoments/Header';

class Admin extends  React.Component{
   render(){
       return(
           <>
                <Header/>
                <ColumnAdm/>
                <Footer/>
                            
           </>
       )
   }
}

export default Admin