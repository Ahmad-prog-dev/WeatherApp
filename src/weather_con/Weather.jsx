import React, { useState } from 'react'
import Icon from '../weather_con/icon1.png'
import Icon1 from '../weather_con/icon.webp'
import img from '../weather_con/img.png'
import wind from '../weather_con/wind.png'
const Weather = () => {
    let [input, setInput] = useState('')
    let [data, setData] = useState('');
    let handle = async()=>{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=93fbff09cfc8e06af1953b68212c344d`);
        response = await response.json();
        console.log(response)
        setData(response)

    }
  return (
    <div className='place-self-center p-10 rounded-2xl bg-[linear-gradient(45deg,#2f4680,#500ae4)] flex flex-col items-center'>
        <div className="flex items-center gap-3">
            <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='Search' className='h-[50px] border-none outline-none rounded-4xl pl-6 text-[#626262] bg-[#ebfffc] text-1xl'/>
            <img src={Icon} className='w-[50px] p-[15px] rounded-[50%] bg-[#ebfffc] cursor-pointer' onClick={handle}/>
        </div>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className='h-20 w-20 mt-[20px]' alt="" />
        <p className='text-white text-[80px] '>{Math.floor(data.main.temp)}°C</p>
        <h2 className='text-white capitalize'>{data.weather[0].description}</h2>
        <p className='text-white text-[40px]'>{data.name}</p>
        <div className="flex gap-[40px] text-white">
            <div className="flex items-start gap-2 text-[22px] ">
                <img src={img} className='h-10 w-10 mr-[-20px]' alt="" />
                <div>
                    <p>{data.main.humidity} %</p>
                    <span className='block mt-2'>Humidity</span>
                </div>
            </div>
            <div className="flex items-start gap-2 text-[22px] ">
                <img src={wind} className='h-10 w-10 mr-[-20px]' alt="" />
                <div className='ml-2'>
                    <p>{data.wind.speed} Km/h</p>
                    <span className='block mt-2'>Wind Speed</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Weather