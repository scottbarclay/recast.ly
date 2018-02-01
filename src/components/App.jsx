class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playerVideo: window.exampleVideoData[0], 
      allVideos: window.exampleVideoData,
      seachText: 'aaaaa'
    };
  }  

  onTitleClick(video) {
    this.setState({
      playerVideo: video
    });
  }
  
  changeSearchText(searchInput) {
    console.log(searchInput.target.value);
    this.setState({
      searchText: searchInput.target.value
    });
  }
  youtubeSearch() {
    var searchOptions = {};
    searchOptions.q = this.state.searchText;
    searchOptions.maxResults = 5;
    searchOptions.key = window.YOUTUBE_API_KEY; 
    searchYouTube(searchOptions, function() {
      this.setState({allVideos: data});

    });
  }

  render(props) {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search changeSearchText={this.changeSearchText.bind(this)} searchButtonClick={this.youtubeSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList click={this.onTitleClick.bind(this)} videos={this.state.allVideos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



 // onListItemClick() {
 //    this.setState({
 //      done: !this.state.done
 //    });
 //  }