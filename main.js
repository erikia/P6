const TOP_RANKED = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1&page=1";
const BEST_ALL_CATEGORIES = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7&page=1";
const BEST_ACTION = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=7&page=1";
const BEST_ADVENTURE = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score&page_size=7&page=1";


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