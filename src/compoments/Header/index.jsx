import React, { Component } from "react";

import './styles.css'
import {Link } from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <>
                <div className="container">
                    <nav>
                        <ul className="list">
                            <li className="item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="item">
                                <Link to="/users">Users</Link>
                            </li>
                            <li className="item">
                                <Link to="/admin">Admin</Link>  
                            </li>
                            <li className="item">
                                <Link to="/login">Login</Link>  
                            </li>
                        </ul>                    
                    </nav>                            
                </div>
            </>
        )
    }
    
}
export default Header