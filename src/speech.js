import React, { Component } from 'react';
import txt from './txt';
import './speech.css'; 

export default class Speech extends Component {
  randomNumber(){
	return Math.floor(Math.random() * ( txt.length ));
  }
  sentancesInAParagraph(){
	return Math.floor(Math.random() * ( 3 ) ) + 1 ;
  }
  paragraphText(){
	  return [...Array(this.sentancesInAParagraph() ).keys()].map( () => {
			return txt[this.randomNumber()]
	  })
	
  }
  render() {
	  let paragraphs = parseInt( this.props.paragraphs, 10 );
	  return ( 
	  	<div className="ipsum"  >
			{ [...Array(paragraphs).keys()].map( v => {
				return <p key={v}>
					{this.paragraphText()}
				</p>
			})}
		</div>
	  );
  }
}

