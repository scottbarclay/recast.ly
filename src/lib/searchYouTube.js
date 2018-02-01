var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: function(data) {
      console.log('success!!');
    },
    error: function(data) {
      console.log('nope');
    }
  });
};

window.searchYouTube = searchYouTube;
