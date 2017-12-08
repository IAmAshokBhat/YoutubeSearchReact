 import _ from 'lodash';
 import React, { Component }  from 'react';
 import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
 import SearchBar from './components/searchbar';
 import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

 const API_KEY = 'AIzaSyBUTKXd_rYpPGKl1Ms2GVwckcpeRsC30RA';



class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
    this.videoSearch('India');        
    };

    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });         
        });
    };
    render(){
        const videoSrch = _.debounce((term)=>{this.videoSearch(term)},300)
        return(<div>
            <SearchBar OnSearchTermChange={videoSrch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}/>
            
        </div>);
    }
    
}
ReactDOM.render(<App />,document.querySelector('.container'));