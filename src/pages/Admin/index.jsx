import React, { Component } from 'react';
import Footer from '../../compoments/Footer'
import Column from '../../compoments/Column';
import Header from '../../compoments/Header';

class Admin extends Component{
   render(){
       return(
           <>
                <Header/>
                <Column/>
                <Footer/>
                            
           </>
       )
   }
}

export default Admin