import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBNw2Kjkwg0zQoDUyNDzw6JTztkUF-Wb80';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos:[] };

        YTSearch({ key: API_KEY, term: 'guitar' }, (videos) => {
            this.setState({ videos });
            // this.setState({ videos: videos }); alt for line16
        });
    }
    
    render() { 
    return ( <div>
        <SearchBar />
    </div>
    );
}
}


// renders component to the DOM. second argument determines location
ReactDOM.render(<App />, document.querySelector('.container')); 
