class App extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      playerVideo: window.exampleVideoData[0], 
      allVideos: window.exampleVideoData,
      seachText: 'aaaaa'
    };
    this.changeSearchText = this.changeSearchText.bind(this); // varibles to refer to bound functions
    this.youtubeSearch = _.debounce(this.youtubeSearch.bind(this), 500); //debouncer
    this.onTitleClick = this.onTitleClick.bind(this); // more varibles...
    this.callYouTube = this.callYouTube.bind(this);
  }  

  onTitleClick(video) { // updates state of video player when a link in the video list is clicked
    this.setState({
      playerVideo: video
    });
  }

  callYouTube(data) { // callback for the ajax call to API; updates state of all videos on the page with data pulled from youtube
    this.setState({
      allVideos: data, 
      playerVideo: data[0]
    });
  }  
  
  changeSearchText(searchInput) { // performed on change to search field input
    this.setState({
      searchText: searchInput.target.value
    });
  }
  youtubeSearch() { // prepares the options package to pass in the ajax call to the API
    var searchOptions = {};
    searchOptions.query = this.state.searchText; // sets query text to the current search input text
    searchOptions.max = 5;
    searchOptions.key = window.YOUTUBE_API_KEY; // refers to API creds
    this.props.searchYouTube(searchOptions, this.callYouTube); // invocation of ajax call function
  }

  render(props) { // html that will be inserted into the #app div in index.html
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search changeSearchText={this.changeSearchText} searchButtonClick={this.youtubeSearch}/> 
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList click={this.onTitleClick} videos={this.state.allVideos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
