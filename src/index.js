import React from 'react';
import ReactDOM from 'react-dom';

// create a new component that should produce html
const App = () => {
    return <div>Hi!</div>;
}

// renders component to the DOM. second argument determines location
ReactDOM.render(<App />, document.querySelector('.container')); 
