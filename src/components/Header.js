import React from 'react';

//since they have no state, no concern with states, can be converted into stateless functional components 
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title"> {props.title} </h1>
            {props.subtitle && <h2 className="header__subtitle"> {props.subtitle} </h2>}       
        </div>
    </div>
);
// Default props given to any component 
Header.defaultProps = {
    title: 'Indecision App'
};

export default Header;