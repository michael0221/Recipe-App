// let gallery = document.getElementById("gallery1");
let container = document.getElementById("container");
let breakfast = "breakfast";
let snacks = "snacks";
let pastries = "pastries";

let apiKey = 'b92272498f774713a9be6482436c0249'
let url = `https://api.spoonacular.com/food/search?apiKey=${apiKey}`

async function getFoods() {
    let response = await fetch(url)
    let data = await response.json()
        // for (let i = 0; i < 20; i++) {

    // film = movie[i].innerHTML
    // link[i].href = 'https://www.themoviedb.org/movie/' + data.results[i].id
    // image[i].src = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + data.results[i].poster_path
    // image[i].alt = data.results[i].title
    // title[i].textContent = data.results[i].title

    // }
    // let food = `https://api.spoonacular.com/food/search?query=${snacks}&number=${i}`

    console.log(data)

}
getFoods()