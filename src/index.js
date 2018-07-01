import React from 'react'; 
import ReactDOM from 'react-dom';
//create a new component, this component should generate some html//
const App = () => {
    return <div>Hi!</div>;
}

//take this component's generated html and shove it up in the DOM//
ReactDOM.render(<App />, document.querySelector('.container '));