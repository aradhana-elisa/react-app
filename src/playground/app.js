// gives us all of the features of the react component. 
//react components are reusable
class IndecisonApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
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

    handleDeleteOptions(){
        this.setState(() => ({options : [] }));
        /* this.setState(() => {
            return {
                options: []
            };
        }); */
    }

    handleDeleteOption(optionToRemove){
        //console.log('hdb', option);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option); 
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add Item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));        
    }

    render(){
        //const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of the computer.';
        
        return (
            <div>
            <Header subtitle={subtitle}/>
            <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick = {this.handlePick}  
            />
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
        );
    }
}
/* IndecisonApp.defaultProps = {
    options: []
}; */

//since they have no state, no concern with states, can be converted into stateless functional components 
const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            {props.subtitle && <h2> {props.subtitle} </h2>}       
        </div>
    );
};
// Default props given to any component 
Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    );
};


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

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.option.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.option.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
        </div>
    );
}


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({error}));
        //this.setState(() => ({error: error }));

        if(!error){
            e.target.elements.option.value = '';
        }

    }
    
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} >
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
        
    }
}

//stateless functional component, stateless dont have access to this hence you pass props as argument to the function
/* const User = function(props){
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}; */

ReactDOM.render(<IndecisonApp />, document.getElementById('app'));