import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar'

const API_KEY = '';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}
ReactDOM.render(<App/>, document.querySelector('.container'));
