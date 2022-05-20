// const TOP_RANKED = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1&page=1";
// const BEST_ALL_CATEGORIES = "http://localhost:8000/api/v1/titles/9";

// class Movies {
//     constructor(element, url, index) {
//         this.url = url;
//         this.index = index;
//         this.element = element
//         this.dico = {}
//         let movie = this.getInfo()
//         console.log(movie.actors)
//     }

//     getInfo = async function () {
//         let response = await fetch(this.url)
//         return response.json()
//         .then(function(value){
//             let title = value.title;
//             let actors = value.actors;
//             let dico = {"actors": actors, 'titles': title}
//             console.log(dico.actors)
//         return dico.actors
//         })
        
//     }
// }

// // const dom = document.querySelector('#carousel')
// const container = document.querySelector('.container')

// // new Movies(container, BEST_ALL_CATEGORIES, 0)
// container.innerHTML = new Movies(container, BEST_ALL_CATEGORIES, 0)


// -------------------------------------------------------------
// -------------------------------------------------------------


fetch('http://localhost:8000/api/v1/titles/9')
    .then(function(response) {
        // Transofme en texte
        return response.text()
    })
    .then(function(html) {
        // Initialiser le DOM parser
        var parser = new DOMParser();

        // Analyser le texte
        var doc = parser.parseFromString(html, "text/html");

        // Selection la partie dans l'html
        if(document.getElementById("text") != null){
            var idPost= document.getElementById("text").innerHTML;
        }
        // var idPost = doc.querySelector('text').innerHTML;

        console.log(doc);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });





// -------------------------------------------------------------
// -------------------------------------------------------------



// TOP_RANKED.forEach(function(top) {
//     console.log(top)
    
// });

// fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1&page=1')

// function run() {
//     fetch(this.url)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data)
//             return data;
//         })
// }
// run()


// fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1&page=1')
//    .then(response => response.json())
//    .then(characters => showCharacters(characters.results));

// showCharacters = characters => {
// const charactersDiv = document.querySelector('actors');
// characters.forEach(character => {
//     const characterElement = document.createElement('p');
//     characterElement.innerText = `Character Name: ${character.name}`;
//     charactersDiv.append(characterElement);
// });
// }


