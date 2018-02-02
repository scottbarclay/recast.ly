var Search = (props) => ( // listens for change in search input text and click of search button
  <div className="search-bar form-inline">
    <input onChange={(searchInput) => props.changeSearchText(searchInput)} className="form-control" type="text" />
    <button onClick={() => props.searchButtonClick()} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
