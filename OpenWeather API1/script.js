const url='https://api.openweathermap.org/data/2.5/'
const key='c36ccfc43ef7b62700a8fa8f79e02c62'

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResults(searchBar.value);
}

    const getResults= (cityName) => {
         let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
         console.log(query);
         fetch(query)
         .then(weather => {
             return weather.json()
         })
         .then(displayResults)
    }

    const displayResults = (weather) => {
        let city =document.querySelector('.city')
        city.innerText = `${weather.name}, ${weather.sys.country}`
        

        let temp = document.querySelector('.temp')
        temp.innerHTML = `${Math.round(weather.main.temp)}°C`

        let desc = document.querySelector('.desc')
        desc.innerHTML =`${weather.weather[0].description[0].toUpperCase()}${weather.weather[0].description.slice(1).toLowerCase()}`

        let minmax = document.querySelector('.minmax')
        minmax.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`

    
    }

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)
