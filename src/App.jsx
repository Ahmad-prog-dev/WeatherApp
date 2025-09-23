import { useState } from 'react'
import './App.css'
import Card from './component/Card'
import Field from './component/Field'
import Button from './component/Button'
import {useWeather} from './context/Weather'

function App() {
  let weather = useWeather();
  return (
    <div className="app">
      <h1>Weather Forcast</h1>
      <Field/>
      <Button onClick={weather.fetchData} value='Search'/>
      <Card/>
    </div>
  )
}

export default App
