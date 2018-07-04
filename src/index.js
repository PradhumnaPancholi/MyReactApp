import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import YTSearch  from 'youtube-api-search';
import YoutubeAPI from 'youtube-api-client';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


/*const API_KEY = 'AIzaSyBaJ95cDBubLFXn9a8-UJVIdT2FTIBzn7w';

YTSearch = ({key: API_KEY, term: 'Avengers'}, function(data){
    
});*/
const youtube = new YoutubeAPI({
  apiKey: 'AIzaSyBaJ95cDBubLFXn9a8-UJVIdT2FTIBzn7w'
});
 

class  App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: []};

        youtube.getSearchResultsFor('avengers')
            .then(videos => {
                this.setState({ videos });
                console.log(videos);
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos = {this.state.videos}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container '));