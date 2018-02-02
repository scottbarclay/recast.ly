var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => // mapping the video data to pass to videoListEntry where each is processed
      <VideoListEntry click={props.click} video={video} /> // each click event and each particular video to be processed 
    )} 
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
