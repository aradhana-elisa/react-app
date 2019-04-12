class VisibilityToggle extends React.Component {
    constructor(props){
        // maintaining the previous behavior
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible:false
        };
    }
    handleToggleVisibility() {
        this.setState( (prevState) => {
            return {
                visible: !prevState.visible
            }
            
        });
    }
    render() {
        return (
            <div>
                <h1>Toggle visibility {this.state.visible}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                    {
                        this.state.visible && (
                            <div>
                            <p>Hey. These are some details you can now see!</p>
                            </div>
                        )
                    }
                
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/* const appRoot = document.getElementById("app");

let visible = false;
const visibility = () => {
    visible = !visible;
    renderFunction();
}

const renderFunction = () => {
    const template = (
    <div>
        <h1>Toggel visibility </h1>
        <button onClick={visibility}>{visible ? 'Hide details' : 'Show details'}</button>
        {
            visible && (
                <div>
                <p>Hey. These are some details you can now see!</p>
                </div>
            )
        }
    </div> 
    
    )


    ReactDOM.render(template, appRoot); 
}
renderFunction(); */