import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

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
  
  console.log(coords)

  return (
    <>
      <h1>Weather app</h1>
    </>
  )
}

export default App
