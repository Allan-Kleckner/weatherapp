let weatherData;

const $temp = $('#temp');
const $feel = $('#feel');
const $weather = $('#weather');


$('form').on('submit', handleGetData);

function handleGetData(event){
  event.preventDefault();
  const searchText = $("#search").val();
  //Load in the value of the search textbox:
  $.ajax({url:`http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=11a0f66d91de6bbc1159813009bc1774&units=imperial` })
    .then(
      (data) => {
        weatherData = data;
        console.log(weatherData);
          render();
    },
      (error) => {
      console.log("Bad Request: ", error)
    }
    )
  }
    function render (){
      $("#weatherFor").text(weatherData.name);
      $("#temp").text(weatherData.main.temp);
      $("#feel").text(weatherData.main.feels_like);
      $("#weather").text(weatherData.weather[0].description);
    }
    console.log("It's working!")


