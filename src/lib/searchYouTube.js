var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
          maxResults: options.max,
                   q: options.query, 
                 key: options.key, 
                part: 'snippet', 
     videoEmbeddable: true, 
                type: 'video'},

    success: function(data) {
      // console.log('success!!', data);
      callback(data.items);
    },
    error: function(data) {
      console.log('nope', data);
    }
  });
};

window.searchYouTube = searchYouTube;
