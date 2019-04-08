import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export default class ResetButton extends React.Component{
    render(){
        return(
            <button      
            onClick = {() => this.props.onClick()}
            >
            ResetGame</button>
        ) 
    }
}
