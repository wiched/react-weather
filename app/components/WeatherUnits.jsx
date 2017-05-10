let React = require('react');

let WeatherUnits = React.createClass({
    getInitialState: function () {
        return {
            celsius: true
        }
    },
    handleClick: function () {
        this.setState({
            celsius: !this.state.celsius
        });
    },
    render: function () {
        let {celsius} = this.state;

        let units = true;
        if(this.state.celsius) {
            units = '°C';
            test = 'metric'
        } else {
            units = '°F';
            test = 'imperial'
        }
        return (
                <li>
                    <button onClick={this.handleClick} className="button hollow ">{units}</button>
                    <p>{}</p>
                </li>
        );
    }
});

module.exports = WeatherUnits;