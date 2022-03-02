console.log("howdy");

let searchInput = "russia";

let newsAPI = "https://gnews.io/api/v4/search=" + searchInput+ "lang=en&token=" + key;
let topStoriesAPI = "https://gnews.io/api/v4/top-headlines?lang=en&token=" + key;
let weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=-41.2924&lon=174.7787&units=metric&appid=" + weatherKey;




// display today's date

let options = {year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date();
let displayToday = today.toLocaleDateString("en-NZ", options);

$(".todays-info__date").empty().append(
    `<h6 class="todays-date">${displayToday}</h6>`
)

// start of weather API data

$.ajax({
    method: "GET", 
    url: weatherAPI,
    success: function(weatherNow){
        console.log(weatherNow);
        console.log(weatherNow.main.temp);

        let icon;

        if(weatherNow.weather.main === "Thunderstorm"){
            icon = "./img/weather-icons/storm weather.png";
        }else if(weatherNow.weather[0].main === "Drizzle"){
            icon = "./img/weather-icons/cloud drizzel.png";
        }else if(weatherNow.weather[0].main === "Rain"){
            icon = "./img/weather-icons/rain.png";
        }else if(weatherNow.weather[0].main === "Snow"){
            icon = "./img/weather-icons/snowflake.png";
        }else if(weatherNow.weather[0].main === "Clear"){
            icon = "./img/weather-icons/warm weather.png";
        }else if(weatherNow.weather[0].main === "Clouds"){
            icon = "./img/weather-icons/clouds.png";
        }else{
            icon = "./img/weather-icons/not available.png";
        }

        console.log(icon);

        $(".todays-info__local").empty().append(
          `<h6 class="location">Kia ora, ${weatherNow.name}!</h6>
          <img class="icon" src="${icon}">
          <h6 class="temp">${weatherNow.main.temp.toFixed(1)}&deg;C</h6>`
        )
    }
});

$.ajax({
    method: "GET",
    url: topStoriesAPI,
    success: function(topResults){
        
        console.log(topResults);

        const random = Math.floor(Math.random() * topResults.length);

        let featuredStory = topResults[random];

        $(".top-story").empty().append(
        `         
            <div class="top-story__vis">
                <img class="top-story__heading" src="./img/featured story.svg">
                <div class="top-story__gradient"></div>
                <div class="top-story__img-container">
                    <img class="top-story__img" src="${featuredStory.ijmage}" alt="">
                </div>
            </div>

            <div class="top-story__info">
                <h3 class="top-story__article-heading" id="topArticleHeading">${featuredStory.title}</h3>
                <p class="top-story__article-prev" id="topArticlePrev">${featuredStory.description}</p>
                <p class="top-story__read-more" id="topReadMore"><a class="top-story__read-more" href="">Read More</a></p>
            </div>

        `
        )

        // top stories cards for home page

        $(".card-one").empty().append(
            `
            <img class="card-img-top" src="${topResults.articles[1].image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${topResults.articles[1].title}</h5>
            <p class="card-text">${topResults.articles[1].description}</p>
            <a href="#" class="btn btn-primary">Read More.</a>
            </div>
            `
        )

        $(".card-two").empty().append(
            `
            <img class="card-img-top" src="${topResults.articles[5].image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${topResults.articles[5].title}</h5>
            <p class="card-text">${topResults.articles[5].description}</p>
            <a href="#" class="btn btn-primary">Read More.</a>
            </div>
            `
        )

        $(".card-three").empty().append(
            `
            <img class="card-img-top" src="${topResults.articles[3].image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${topResults.articles[2].title}</h5>
            <p class="card-text">${topResults.articles[3].description}</p>
            <a href="#" class="btn btn-primary">Read More.</a>
            </div>
            `
        )

        $(".card-four").empty().append(
            `
            <img class="card-img-top" src="${topResults.articles[4].image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${topResults.articles[4].title}</h5>
            <p class="card-text">${topResults.articles[4].description}</p>
            <a href="#" class="btn btn-primary">Read More.</a>
            </div>
            `
        )

        // end of top stories cards for home page
    }
});

$.ajax({
    method: "GET",
    url: newsAPI,
    success: function(response){

    }
})