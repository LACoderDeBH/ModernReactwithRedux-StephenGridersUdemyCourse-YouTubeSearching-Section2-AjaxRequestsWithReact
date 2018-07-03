import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
//API key to use youtube capabilities
const API_KEY = 'AIzaSyDqJmiJSGJ3yExYSMn2FVjoMQdWs5gLw7E';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Professor Leonard');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

    render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

      return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        {/*passing props videos to VideoList*/}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
}

//Take this component's henerated HTML and put it on the
//page (in the DOM)
//the .container is what is used in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
