import React from 'react'
import { useWeather } from '../context/Weather'
const Card = () => {
  let weather = useWeather();
  return (
    <div className=' p-[10px] rounded-[20px] shadow-(color: black) shadow-lg bg-gray-300 mt-5'>
        <img className='h-30 w-30 m-auto' src={`https://openweathermap.org/img/wn/${weather.data?.weather[0].icon}@2x.png`} alt="" />
        <h2 className='text-[30px] capitalize '>{weather.data?.weather[0].description}</h2>
        <h2 className='mt-3 text-xl'>Temperature {weather.data?.main?.temp}</h2>
       <div className='flex justify-between m-10 font-bold'>
        <h2>Feels like : {weather.data?.main?.feels_like}</h2>
        <h2>Humidity : {weather.data?.main?.humidity}</h2></div>
        <h5 className='text-[25px]'>{weather.data?.name}</h5>
    </div>
  )
}

export default Card