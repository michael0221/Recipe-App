let gallery = document.getElementById("gallery");
let gallery1 = document.getElementById("gallery1");
let gallery2 = document.getElementById("gallery2");
let container = document.getElementById("container");
var number = 5;


const url = `https://api.spoonacular.com/food/search?apiKey=b92272498f774713a9be6482436c0249`;
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'

    }
}

// async function getBreakfast() {
//     var response = await fetch(url + '&type=breakfast&number=' + number, options);
//     var data = await response.json();
//     console.log(data.searchResults[0].results);
//     // console.log(data.searchResults[0].results[1]["name"]);
//     for (loop = 0; loop < number; loop++) {
//         var subContainer = document.createElement("div");
//         subContainer.classList.add("gallery1-cell");
//         var image = document.createElement("img");
//         image.classList.add("pic");
//         image.src = data.searchResults[0].results[loop]["image"];
//         subContainer.append(image);
//         var title = document.createElement("h4");
//         image.after(title);
//         title.textContent = data.searchResults[0].results[loop]["name"];
//         var text = document.createElement("p");
//         text.classList.add("desc");
//         title.after(text);
//         var newtexts = data.searchResults[0].results[loop]["content"].substring(0, 200);
//         newtexts = newtexts.replace(/<\/?[^>]+(>|$)/g, "");
//         // newtexts = newtexts.replace(/[^0-9A-Za-z\ ]/g, '');
//         text.textContent = newtexts;
//         gallery.append(subContainer)
//     }
// }
// getBreakfast()

async function fetchURLs() {
    try {
        // Promise.all() lets us coalesce multiple promises into a single super-promise
        var data = await Promise.all([
            /* Alternatively store each in an array */
            // var [x, y, z] = await Promise.all([
            // parse results as json; fetch data response has several reader methods available:
            //.arrayBuffer()
            //.blob()
            //.formData()
            //.json()
            //.text()
            fetch(url + '&type=breakfast&number=' + number, options).then((response) => response.json()), // parse each response as json
            fetch(url + '&type=snack&number=' + number, options).then((response) => response.json()),
            fetch(url + '&type=dessert&number=' + number, options).then((response) => response.json())
        ]);



    } catch (error) {
        console.log(error);
    }
}
fetchURLs()