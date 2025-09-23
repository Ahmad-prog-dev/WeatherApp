export const getWeather = async(city)=>{
   let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93fbff09cfc8e06af1953b68212c344d&aqi=yes`);
   return await response.json();
}