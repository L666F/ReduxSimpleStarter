import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar'

const API_KEY = 'AIzaSyCoWLC6gNwMSoJ6AWnbMWnl2m8Z-rMs1wA';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}
ReactDOM.render(<App/>, document.querySelector('.container'));