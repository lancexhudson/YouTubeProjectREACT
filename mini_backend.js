// const PORT = 8000;
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// require('dotenv').config()
// const app = express()

// app.get('/', (req, res) => {
//     res.json('')
// })

// const API_KEY = 'AIzaSyBNw2Kjkwg0zQoDUyNDzw6JTztkUF-Wb80';
// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { 
//             videos: [],
//             selectedVideo: null
//         };
//         this.videoSearch('guitar');
//     }

//     videoSearch(term) {
//         YTSearch({ key: API_KEY, term: term }, (videos) => {
//             this.setState({ 
//                 videos: videos,
//                 selectedVideo: videos[0]
//             });
//         });
//     }

//     render() { 
//         //debounce runs every 300 milliseconds 
//         const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

//     return ( <div>
//         <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
//         <VideoDetail video={this.state.selectedVideo} />
//         <VideoList 
//         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
//         videos={this.state.videos} />
//     </div>
//     );


// app.listen(8000, () => console.log('Server is running on point ${PORT}'))
//     }
// }