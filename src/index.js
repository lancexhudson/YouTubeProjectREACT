import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBNw2Kjkwg0zQoDUyNDzw6JTztkUF-Wb80';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'guitar' }, (videos) => {
            this.setState({ videos });
            // this.setState({ videos: videos }); alt for line16
        });
    }

    render() { 
    return ( <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
    </div>
    );
}
}

// renders component to the DOM. second argument determines location
ReactDOM.render(<App />, document.querySelector('.container')); 
