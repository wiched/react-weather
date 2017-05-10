let React = require('react');

let WeatherUnits = React.createClass({
    getInitialState: function () {
        return {
            celsius: true
        }
    },

    render: function () {
        return (
                <li>
                    <button className="button hollow celsius">°C</button>
                    <button className="button hollow">°F</button>
                </li>
        );
    }
});

module.exports = WeatherUnits;