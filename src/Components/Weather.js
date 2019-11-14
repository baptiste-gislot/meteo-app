import React from 'react';
import { swing } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './Weather.css';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.now = new Date();
    this.date = this.now.getDate();
    this.annee = this.now.getFullYear();
    this.mois = this.now.getMonth() + 1;

    this.style = {
      swing: {
        animation: 'x 4s',
        animationName: Radium.keyframes(swing, 'swing'),
      },
    };
  }

  render(){
    return(
      <div>
        <h1 className="title">{this.props.data.city}</h1>
        <div className='card'>
          <p className='cityName'>{this.props.data.city}</p>
          <p className='date'>{this.date}/{this.mois}/{this.annee}</p>
          <StyleRoot>
          <img className='imgWeather' style={this.style.swing} src={`https://openweathermap.org/img/wn/${this.props.data.icon}@2x.png`} alt={this.props.iconDesc} width='100px'/>
          </StyleRoot>
          <p className='temperature'>{`${this.props.data.temp.toFixed(1)} °C`}</p>
          <p className='trait'>-----------</p>
          <p className="weatherDescription">{this.props.data.iconDesc}</p>
          <p className="tempMinMax">{Math.floor(this.props.data.minTemp)} °C / {Math.floor(this.props.data.maxTemp)} °C</p>
        </div>
      </div>
    )
  }
}

export default Weather;