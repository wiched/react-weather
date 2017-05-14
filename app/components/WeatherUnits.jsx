var React = require('react');

var WeatherUnits = React.createClass({
    // onFormSubmit: function (e) {
    //     e.preventDefault();
    //
    //     var location = this.refs.location.value;
    //
    //     if (location.length > 0) {
    //         this.refs.location.value = '';
    //         this.props.onSearch(location);
    //     }
    // },
    getInitialState: function () {
        return {
            units: 'metric'
        }
    },

    onClickUnitsF() {
       this.setState({
           units: 'imperial'
       });
        console.log(this.state.units);
    },

    onClickUnitsC() {
        this.setState({
            units: 'metric'
        });
        console.log(this.state.units);
    },
    render: function () {

        return (
            <li>
        <button className="hollow button" onClick={this.onClickUnitsC}>C</button>
        <button className="hollow button" onClick={this.onClickUnitsF}>{this.state.units}</button>
            </li>
        );
    }
});

module.exports = WeatherUnits;
