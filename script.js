window.addEventListener("load", function () {
    // This is where we want to now fetch some data from an API
    // so that we can display on the page

    fetch("https://swapi.dev/api/planets/1/").then(function (response) {
        // This response parameter is the variable with which we can access the data that we have fetched
        // this launchcode API
        // In other words, the data we fetch from any url will be contained inside of this response object
        // So now we can extract the json from this response object
        response.json().then(function (json) {
            // Similarly to how we had to wait for the fetch request to go through before we could the response,
            // we also have to wait for the JSON to extracted from this response. Only THEN, can we work with the actual
            // JSON data
            // console.log(json);

            // We now have access to the json weather data from the URL that we fetched,
            // so let's display on the web page

            let planetInfo = document.getElementById("planetInfo");

            planetInfo.innerHTML = `
                     <ul>
                        <li>Name: ${json.name}</li>
                        <li>Population: ${json.population}</li>
                        <li>Terrain: ${json.terrain}</li>
                     </ul>
                  `;
        })
    })
})