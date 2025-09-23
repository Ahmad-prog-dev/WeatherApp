import React from 'react'
import {useWeather} from '../context/Weather'
const Field = () => {
  let weather = useWeather()
  return (
    <input className='rounded-[10px] border-none text-[25px] shadow-(color: black) shadow-xl mt-5 mr-2 p-1' placeholder='Search Here' value={weather.city} onChange={(e)=>weather.setCity(e.target.value)} />
  )
}

export default Field