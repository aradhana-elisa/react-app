class Counter extends React.Component{
    constructor(props){
        // maintaining the previous behavior
        super(props);
        this.handleAddOne= this.handleAddOne.bind(this);
        this.handleMinusOne= this.handleMinusOne.bind(this);
        this.handleReset= this.handleReset.bind(this);
        //setting up the default state object 
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        //in case when a not valid json is passed we need to avoid that case
        try {
            // if valid json
            //get the real array back and do soemthing iwth it (like change the state)
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            //saving the state
            if(!isNaN(count)){
                this.setState(() => ({ count}));
            }
        } catch (e){
            // Do nothing at all 

        }
    }

    componentDidUpdate(prevProps, prevState) {
        //only update the options array when something actually changes
        if(prevState.count !== this.state.count){
            //store the state in teh localStorage
            localStorage.setItem('count', this.state.count);
            console.log('saving data');
        }
        
    }

    //parseInt 
    handleAddOne(){
        // if you want to use a previous state value, you just define it in the ste state function as an argument and use it.
        // if you have multiple states that are in your obj, you only provide the ones that are changing here.
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState( (prevState) => {
            return {
                count : prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState( () => {
            return {
                count: 0
            };           
        });

        /* this.setState( (prevState) => {
            return {
                count: prevState.count +1
            };           
        }); */


        //async process - cz a lot goes behind the screen - virtual dom and figures out what to change, always this.setstate with updated function
        /* this.setState({
            count: 0
        });
        this.setState({
            count: this.state.count +1 
        }) */

        /* this.setState( () => {
            return {
                count : 0
            };
        }); */
    }
    render(){
        return (
            <div>
            
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1 </button>

                <button onClick={this.handleMinusOne}> -1 </button>

                <button onClick={this.handleReset}> Reset </button>
            </div>
        );
    }
}

/* Counter.defaultProps = {
    count: 0
} */

ReactDOM.render(<Counter count= {12} />, document.getElementById('app'));

/* let count= 0; 
const addOne = () => {
    count++;
    console.log("add one");
}

const minusOne = () => {
    console.log("minus one");
}

const reset = () => {
    console.log("reset ");
}
const templateTwo = (
    <div>   
        <h1>Count: {count}</h1>
        <button onClick={addOne}> +1 </button>

        <button onClick={minusOne}> -1 </button>

        <button onClick={reset}> Reset </button>
    </div>
); */