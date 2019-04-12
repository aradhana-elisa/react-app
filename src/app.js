/* import validator from 'validator';

console.log(validator.isEmail('test@gmail.com')); */

import React from 'react';
import ReactDOM from 'react-dom';

import IndecisonApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisonApp />, document.getElementById('app'));

/* class Action extends React.Component{
   
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should i do?
                </button>
            </div>
        );
        
    }
} */


//stateless functional component, stateless dont have access to this hence you pass props as argument to the function
/* const User = function(props){
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}; */


