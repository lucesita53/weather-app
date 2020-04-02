import axios from 'axios'
import OPEN_WEATHER_API_KEY from './settings'

const callOpenWeather = city => {
  return axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=${OPEN_WEATHER_API_KEY}`,
    mode: 'no-cors'
  })
    .then(response => response.data)
    .catch(error => console.log(error))
}

export default callOpenWeather
