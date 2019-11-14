import React from 'react';
import Weather from './Components/Weather';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.apiKey = 'a07f994635e34d67214c576625182a19';
    this.state = {
      data: false,
      lat: 0,
      lon: 0,
      search: '',
      city: '',
      description: '',
      temp: 0,
      maxTemp: 0,
      minTemp: 0,
      humidity: 0,
      icon: '',
      iconDesc: '',
      windSpeed: 0,
      windDeg: 0
    }
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    })
  }

  getWeather = (searchType) => {
    let url = searchType 
      ? `https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&units=metric&appid=${this.apiKey}`
      : `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${this.apiKey}`
    axios.get(url)
    .then(response => {
      console.log(response);
      this.setState({
        data: true,
        city: response.data.name,
        description: response.data.weather[0].main,
        temp: response.data.main.temp,
        maxTemp: response.data.main.temp_max,
        minTemp: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon,
        iconDesc: response.data.weather[0].description,
        windSpeed: response.data.wind.speed,
        windDeg: response.data.wind.deg
      })
    })
  }

  handleChange = (val) => {
    this.setState({
      search: val.target.value
    })
  }

  render(){
    return (
      <div className='App'>
        <div className='search'>
          <TextField type='text' id='standard-basic' margin='normal' name='city' placeholder="Enter a City" required value={this.state.search} onChange={this.handleChange}></TextField>
          <Button variant='contained' color='primary' onClick={() => this.getWeather(true)}>Get Weather !</Button>
          <p>Or</p>
          <Button variant='contained' color='primary' onClick={() => this.getWeather(false)}>Get current location</Button>
        </div>
        <div className='result'>
          {this.state.data 
            && <Weather data={this.state}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
