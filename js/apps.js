const api_key = `7a4d9e6a04e0b8cf4c26a11a7e321933`;
const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>diaplayTeamperature(data));

}

const diaplayTeamperature = data =>{ 
      const  temperature= document.getElementById('temperature');
      const weatherCondition =document.getElementById('weather');
      weatherCondition.innerText=data.weather?data.weather[0].main:"Not pound"
        // console.log(data.main.temp)data.weather[0].main;
        temperature.innerText = data.main.temp

}
document.getElementById('search-btn').addEventListener('click', function(){
  const getCity = document.getElementById('search-field').value ;
  document.getElementById('city-name').innerText = getCity
  

  loadTemperature(getCity);
})
