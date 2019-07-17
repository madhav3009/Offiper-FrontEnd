import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import './sidebar.scss'
import Login from '../sidebar/login/login'
import Signup from '../sidebar/signUp/signup'

class sidebar extends Component {
    render() {
        var option= <Login/>;
        if (this.props.option=='SignUp') {
            option=<Signup/>
        }
        return (
            <div class="sidebarContainer">
            <div class="sidebarLeft"></div>
                
            <div class="sidebar animated slideInRight">
           
            <span class="closeBtn" onClick={this.props.close}><i class="fa fa-times-circle"/></span>     
            <div id="title">
            <h2>{this.props.option}</h2>
           
           </div>
            {option}
            </div>
            </div>
        );
    }
}

export default sidebar;
