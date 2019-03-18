const KEY = "4bc5e9c52a4872e1f178f98e7c326eac"

fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4bc5e9c52a4872e1f178f98e7c326eac/37.8267,-122.4233")
        .then(function (response) {
                return response.json();
        })
        .then(function (taco) {
                taco = JSON.stringify(taco);
                taco = JSON.parse(taco);
                console.log(taco)
        })