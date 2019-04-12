import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisonApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () =>{
        this.setState(() => ({options : [] }));
        /* this.setState(() => {
            return {
                options: []
            };
        }); */
    };

    handleDeleteOption =(optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleClearOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
          selectedOption: option
        }));
      };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add Item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));        
    };

    constructor(props){
        super(props);
/*         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this); */
        
    }

    componentDidMount() {
        //in case when a not valid json is passed we need to avoid that case
        try {
            // if valid json
            //get the real array back and do soemthing iwth it (like change the state)
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            //saving the state
            if(options){
                this.setState(() => ({ options}));
            }
        } catch (e){
            // Do nothing at all 

        }
    }

    componentDidUpdate(prevProps, prevState) {
        //only update the options array when something actually changes
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            //store the state in teh localStorage
            localStorage.setItem('options', json);
            console.log('saving data');
        }
        
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }



    render(){
        //const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of the computer.';
        
        return (
            <div>
            <Header subtitle={subtitle}/>
            <div className="container">
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick = {this.handlePick}  
                />
                <div className="widget">
                    <Options 
                        // doing this gives the component access to the data attr
                        option={this.state.options} 
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                    />
                    <AddOption 
                        handleAddOption = {this.handleAddOption}
                    />
                    </div>
            </div>
            <OptionModal 
                selectedOptionprop= {this.state.selectedOption}
                handleClearOption = {this.handleClearOption}
            />
            </div>
        );
    }
}

