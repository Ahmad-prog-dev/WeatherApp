import { createContext, useContext, useState } from "react";
import {getWeather} from '../api'
let WeatherContext = createContext(null);
export const useWeather = ()=>{
    return useContext(WeatherContext)
}
export const WeatherProvider = (prop)=>{
    let [data, setData] = useState(null);
    let [city, setCity] = useState(null);
    let fetchData = async()=>{
   let response = await getWeather(city);
   setData(response)
}
    return(
        <WeatherContext.Provider value={{city, data, setCity,fetchData}}>
            {prop.children}
        </WeatherContext.Provider>
    )
}