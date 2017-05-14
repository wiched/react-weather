var axios = require('axios');
var WeatherUnits = require('WeatherUnits');
var Nav = require('Nav');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var units = 'metric';
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=${units}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return Math.floor(res.data.main.temp);
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};