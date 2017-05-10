var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it Math.floor({temp})°C in {location}.</h3>
  )
};

module.exports = WeatherMessage;
