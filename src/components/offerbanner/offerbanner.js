import React, { Component } from 'react';
import Typist from 'react-typist';
import './offerbanner.scss'


class offerbanner extends Component {
    render() {
        return (
            <div id="banner">
			<Typist style={{color:"red"}}cursor={{hideWhenDone:true}}avgTypingDelay={200}>
			<h1>GRAB50% Discount</h1>
				<Typist.Backspace count={10} />
				</Typist>
				<div className="typistuse">
				<Typist cursor={{ hideWhenDone: true }}   startDelay={5000} avgTypingDelay={100} >
				<h2>Limited Time Period</h2>
				<Typist.Backspace count={30} />
				<h2>Promo Code</h2>
				
			  
				</Typist>
				
				</div>
				<h3>
</h3>

				<h4>*T&C apply</h4>
			</div>
        );
    }
}

export default offerbanner;