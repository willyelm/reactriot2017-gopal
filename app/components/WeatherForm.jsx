var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  searchCites : function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
       this.props.autoCompleteCities(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Search weather by city" onBlur={this.searchCites}/>
            <button className="button expanded hollow">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
