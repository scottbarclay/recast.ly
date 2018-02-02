var searchYouTube = (options, callback) => { // function that includes ajax call to API and handles response/error
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

    success: (data) => callback(data.items),
    error: (data) => console.log('nope', data)
  });
};

window.searchYouTube = searchYouTube;
