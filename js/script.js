console.log("howdy");

// let lang = "en";
let newsAPI = "https://gnews.io/api/v4/search?lang=en&token=" + key;
let topStoriesAPI = "https://gnews.io/api/v4/top-headlines?lang=en&token=" + key;



$.ajax({
    method: "GET",
    url: topStoriesAPI,
    success: function(result){
        
        console.log(result);
    }
});
