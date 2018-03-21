// var starWarsPeopleList = document.querySelector('ul');
var starWarsPeopleList = document.getElementById("starwarsroller");
var pokemonlist = document.getElementById("pokemonroller");
var unsplashlist = document.getElementById("unsplashroller");
var x = [];
var y={};
function randomizer() {
    let num = Math.floor(Math.random() * 10);
    return num;
}
function randomizer2(){
    let num = Math.floor(Math.random()* 150);
    return num;
}
fetch('https://swapi.co/api/people')
    .then(function (response) {
        return response.json();
    })

    .then(function (json) {
        let people = json.results;

        return x = people;
    })
function myfunc() {
    var choice = x[randomizer()];
    while (starWarsPeopleList.firstChild) {
        starWarsPeopleList.removeChild(starWarsPeopleList.firstChild); //added while loop to only create &display one at a time

    }
    let choice1 = document.createElement('li');
    let choice2 = document.createElement('li');
    let choice3 = document.createElement('li');
    let choice4 = document.createElement('li');
    let choice5 = document.createElement('li');
    choice1.innerHTML = choice.name;
    choice2.innerHTML = choice.gender;
    choice3.innerHTML = choice.hair_color;
    choice4.innerHTML = choice.height;
    choice5.innerHTML = choice.eye_color;
    starWarsPeopleList.appendChild(choice1);
    starWarsPeopleList.appendChild(choice2);
    starWarsPeopleList.appendChild(choice3);
    starWarsPeopleList.appendChild(choice4);
    starWarsPeopleList.appendChild(choice5);
}
fetch('https://pokeapi.co/api/v2/pokemon/' + randomizer2())
        .then(function (response) {
            return response.json();
        })
    
        .then(function (json) {console.log(json);
            let people = json;
    
            return y = people;
        })
function myfunc2() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + randomizer2())
        .then(function (response) {
            return response.json();
        })
    
        .then(function (json) {console.log(json);
            let people = json;
    
            return y = people;
        })
    var choice = y;
    while (pokemonlist.firstChild) {
        pokemonlist.removeChild(pokemonlist.firstChild); //added while loop to only create &display one at a time

    }
    let choice1 = document.createElement('li');
    let choice2 = document.createElement('li');
    let choice3 = document.createElement('li');
    let choice4 = document.createElement('li');
    let choice5 = document.createElement('li');
    
    choice1.innerHTML = choice.name;
    choice2.innerHTML = choice.height;
    choice3.innerHTML = choice.weight;
    choice4.innerHTML = choice.id;
    
    pokemonlist.appendChild(choice1);
    pokemonlist.appendChild(choice2);
    pokemonlist.appendChild(choice3);
    pokemonlist.appendChild(choice4);
}