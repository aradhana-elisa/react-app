//contain JSX 

console.log("App Js is running");

//JSX - Javascript XML
const App = {
    title: 'Indecision App',
    subtitle: 'Subtitle',
    options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        App.options.push(option);
        e.target.elements.option.value ='';
        renderFunction();
    }
};

const removeAll = () => {
    App.options=[];
    renderFunction();
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * App.options.length);
    const option = App.options[randomNum];
    console.log(option);
}

const renderFunction = () => {
    const template = (
        <div>
            <h1>{App.title}</h1>
            {(App.subtitle) && <p>{App.subtitle}</p>}
            <p>{App.options.length >0 ? "Here are your options" : "No options"}</p>
            <button disabled={App.options.length === 0} onClick={onMakeDecision}>Wat should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
               {
                    App.options.map((option) => {
                        return <li key={option}>number : {option}</li>

                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot); 
};


renderFunction();

/* cfunction getLocation(location){
    // will return JSX if location exists, else will return undefined
    if(location){
        return <p>Location: {location}</p>;
    }
}

const user = {
    name: 'Aradhana',
    age: 26,
    location: 'Seattle'
};

onst templateTwo = (
    <div>
        <h1>{user.name}</h1>
        
        {getLocation(user.location)}
    </div>
); */


