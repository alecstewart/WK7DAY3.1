fetch('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=f73550137c3c1623a622a9dcd61ab7bc&units=imperial')
.then(function(data){
  return data.json()
  console.log(data)
})
.then(function(weather){
  console.log(weather)

    var bigbox = document.createElement('div')
      bigbox.classList.add('bigbox')

    var h2 = document.createElement('h2')
      h2.classList.add('h2')
      h2.innerHTML = weather.city.name

    var inlineblock = document.createElement('div')
      inlineblock.classList.add('inlineblock')
      inlineblock.innerHTML = weather.list[0].dt_txt

      console.log(weather.list.dt_txt)

    var inlineblock2 = document.createElement('div')
      inlineblock2.classList.add('inlineblock2')
      inlineblock2.innerHTML = weather.list[0].main.temp

    var inlineblock3 = document.createElement('div')
      inlineblock3.classList.add('inlineblock3')
      inlineblock3.innerHTML = weather.list[0].weather[0].description

    bigbox.appendChild(h2)
    bigbox.appendChild(inlineblock)
    bigbox.appendChild(inlineblock2)
    bigbox.appendChild(inlineblock3)
    document.getElementById('inside').appendChild(bigbox)

  })
