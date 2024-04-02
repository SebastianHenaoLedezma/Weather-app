import React from 'react'

const WeatherCard = ({ weather }) => {
    console.log(weather)
  return (
    <>
        <div>WeatherCard</div>
        <div>
          <button></button>
        </div>
        <div>
          <li><h1>{weather?.name}</h1><span>07:19</span></li>
          <li><p>today 25 oct</p><span>07:19</span></li>
        </div>
        <div>
          <h2>27grados</h2>
          <span>{weather?.weather[0].description}</span>
        </div>
        <div>
          imagen que creo que la quito
        </div>
    </>
  )
}

export default WeatherCard