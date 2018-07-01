import React from 'react'; 
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBaJ95cDBubLFXn9a8-UJVIdT2FTIBzn7w';
//create a new component, this component should generate some html//
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//take this component's generated html and shove it up in the DOM//
ReactDOM.render(<App />, document.querySelector('.container '));