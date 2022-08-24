let gallery = document.getElementsByClassName("gallery");
let container = document.getElementById("container");
var number = 10;


const url = `https://api.spoonacular.com/food/search?apiKey=b92272498f774713a9be6482436c0249`;
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'

    }
}
for (let i = 0; i < 1; i++) {
    async function getFoods() {
        const response = await fetch(url + '&type=breakfast&number=' + number, options);
        const data = await response.json();
        console.log(data.searchResults[0].results);
        // console.log(data.searchResults[0].results[1]["name"]);
        for (loop = 0; loop < number; loop++) {
            const subContainer = document.createElement("div");
            subContainer.classList.add("gallery1-cell");
            const image = document.createElement("img");
            image.classList.add("pic");
            image.src = data.searchResults[0].results[loop]["image"];
            subContainer.append(image);
            const title = document.createElement("h4");
            image.after(title);
            title.textContent = data.searchResults[0].results[loop]["name"];
            const text = document.createElement("p");
            text.classList.add("desc");
            title.after(text);
            var newtexts = data.searchResults[0].results[loop]["content"].substring(0, 200);
            newtexts = newtexts.replace(/<\/?[^>]+(>|$)/g, "");
            // newtexts = newtexts.replace(/[^0-9A-Za-z\ ]/g, '');
            text.textContent = newtexts;
        }
    }
    getFoods()
}