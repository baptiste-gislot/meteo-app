import React from 'react';
import './Weather.css';

function Weather(props){

  return(
    <div className="Card">
      <div className='Temp'>
        <p>{props.data.temp} °C</p>
        <p>Min: {props.data.minTemp} °C / Max: {props.data.maxTemp} °C</p>
      </div>
      <div className='City'>
        <h2>{props.data.city}</h2>
        <img src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt={props.iconDesc} width='100px'/>
        <p>{props.data.description}</p>
      </div>
      <div className='Wind'>
        <p>Wind Speed: {props.data.windSpeed * 3.6} Km/h</p>
        <p>Wind Direction: <img src={process.env.PUBLIC_URL + `/assets/images/arrow.png`} alt='wind arrow' width='50px' style={{transform: `rotate(${props.data.windDeg}deg)`}} /></p>
      </div>
    </div>
  )
}

export default Weather;