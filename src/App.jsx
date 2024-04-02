import { useState, useEffect } from 'react'
import config from './config/config';
import axios from 'axios'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  // Creamos un estado para guardar la informacion
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  // Para que no se haga un bucle infinito
  useEffect(() => {
    const success = pos => {
      // Guardamos la informacion en un objeto
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      // Pasamos en el estado el objeto
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  useEffect(() => {
    if (coords) {
      const APIKey = config.apiKey;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&lang=es&appid=${APIKey}`

      axios.get(url)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <>
      <WeatherCard weather={weather} />
    </>
  )
}

export default App
