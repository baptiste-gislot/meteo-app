import React, { Fragment, Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <Fragment>
        <h2>{this.props.data.city}</h2>
        <p>{this.props.data.temp} °C</p>
        <p>Min: {this.props.data.minTemp} °C / Max: {this.props.data.maxTemp} °C</p>
        <img src={`https://openweathermap.org/img/wn/${this.props.data.icon}@2x.png`} alt={this.props.iconDesc}/>
        <p>{this.props.data.description}</p>
        <p>Wind Speed: {this.props.data.windSpeed * 3.6} Km/h</p>
        <p>Wind Direction: <img src={process.env.PUBLIC_URL + `/assets/images/arrow.png`} width='50px' style={{transform: `rotate(${this.props.data.windDeg}deg)`}} /></p>
      </Fragment>
    )
  }
}

export default Weather;