var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 class="text-center">It's it {temp}°C in {location}.</h3>
    </div>
  )
};

module.exports = WeatherMessage;
