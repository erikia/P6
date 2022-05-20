const TOP_RANKED = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1&page=1";
const BEST_ALL_CATEGORIES = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7&page=1";
const BEST_ACTION = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=7&page=1";
const BEST_ADVENTURE = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score&page_size=7&page=1";
const movie = document.getElementById('movie');

class Movies {
    constructor(url, index) {
        this.url = url;
        this.index = index;
    }

    getUrlImage() {
        let urlImg = this.run();
        console.log(urlImg);
    }

    getInfosBook = async function () {
        let response = await fetch(this.url);
        if (response.ok) {
            return response.json();
        } else {
            console.error('Retour du serveur: ', response.status)
        }
    }

    showMovies(data) {
        movie.innerHTML = '';

        data.forEach(movie => {
            const { title, image_url, votes, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
                <img src="${image_url}" alt="${title}">
                <div class="movie-info">
                    <h2>${title}</h2>
                    <span class="${(votes)}">${votes}</span>
                </div>`

            main.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id)
                openNav(movie)
            })
        })
    }

    // run () {
    //     fetch(this.url)
    //         .then(function(response) {
    //             return response.json();
    //         })
    //         .then(function(data){
    //             console.log(data)
    //             return data;
    //         })
    // }

    run() {
        fetch(this.url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                return data;
            })
    }
}

const bestMovies = new Movies(BEST_ALL_CATEGORIES, 0)
bestMovies.getUrlImage();