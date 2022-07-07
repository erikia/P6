// Base url of the site 
const base_url = "http://localhost:8000/api/v1/titles/"

// Requests for movies data 
const requests = {
  fetchTest: "http://localhost:8000/api/v1/titles/?sort_by=-votes%2C-imdb_score&page_size=10",
  fetchTrending: "http://localhost:8000/api/v1/titles/?sort_by=-votes%2C-imdb_score&page_size=10",
  fetchAdventure: "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchFantasy: "http://localhost:8000/api/v1/titles/?genre=Fantasy&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchTriller: "http://localhost:8000/api/v1/titles/?genre=Thriller&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchRomance: "http://localhost:8000/api/v1/titles/?genre=Romance&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchDrame: "http://localhost:8000/api/v1/titles/?genre=Drame&sort_by=-votes%2C-imdb_score&page_size=10" ,
  fetchDocumentaries:"http://localhost:8000/api/v1/titles/?genre=Documentaries&sort_by=-votes%2C-imdb_score&page_size=10" ,
};

// Main banner
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    // every refresh the movie will be change
    // const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    const setTitle = data.results[2].title;
    // const setImage = data.results[0].image_url
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    banner.style.backgroundImage = "url('img/image_background.jpeg')";
    banner_title.innerText = setTitle;
    });



// Adventure Movies
fetch(requests.fetchAdventure)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Adventure Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      var s = movie.name;
      poster.id = s;
      poster.src = movie.image_url;
      row_posters.appendChild(poster);
    });
  });

// Romance Movies
fetch(requests.fetchRomance)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("netflixrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Romance Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    var s = movie.name;
    poster.id = s;
    poster.src = movie.image_url;
    row_posters.appendChild(poster);
  });
});

// Triller Movies
fetch(requests.fetchTriller)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Triller Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      var s = movie.name;
      poster.id = s;
      poster.src = movie.image_url;
      row_posters.appendChild(poster);
    });
  });


// Trending
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Trending";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      // console.log(movie)
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = movie.image_url;
      // new Modal(movie)
      row_posters.appendChild(poster);
      // creerModal(movie)
      // document.getElementById("row__posterLarge") = new Modal(movie);
      

    });
  });

// _________________________________________ TEST MODAL ________________________________________________

  fetch(requests.fetchTest)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "TEST";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movies => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      var s2 = movies.id;
      poster.id = s2;
      poster.src = movies.image_url
      row_posters.appendChild(poster);
      creerModal(movies)
    console.log(poster,movies)
  });
});



  const creerModal = async function (image,film) {
    const informations = film
    // const row_posters = document.getElementById("row__posterLarge");
    var modal = document.createElement('div')
    modal.id = 'modal'
    // row_posters.appendChild(modal)
    var modalImage= document.createElement('div')
    modalImage.id = 'modal__image'
    headrow.appendChild(modal)
    var modalImg = document.createElement('img')
    modalImage.setAttribute('id','modal__image')
    var modalDescription = document.createElement('modal__description')
    modalDescription.id = 'modal__description'

    image.onclick = function() {
        modalImage.appendChild(modalImg)
        modalImg.src= informations.image_url
        modalDescription.innerHTML = (`<p><b>Title:</b> ${informations.title}` + "<br>" +
                                        `<b>Genre:</b> ${informations.genres}` + "<br>" +
                                        `<b>Year:</b> ${informations.year}` + "<br>" +
                                        `<b>Imdb Score:</b> ${informations.imdb_score}` + "<br>" +
                                        `<b>Directors:</b> ${informations.directors}` + "<br>" +
                                        `<b>Actors:</b> ${informations.actors}</p>`)
        modal.style.display = "flex";
    }
    modal.onclick = function () {
       modalImage.innerHTML= " "
        modalDescription.innerHTML= " "
        modal.style.display = "none"
    }
}
{/* <button id="modal__fermer">&times;</button> */}


// class Modal {
//   constructor (element) {
//     this.image_url = element.image_url,
//     this.title = element.title,
//     this.genres = element.genres,
//     this.votes = element.votes
//     this.year= element.year,
//     this.score = element.imdb_score,   
//     this.votes = element.votes,
//     this.directors = element.directors,
//     this.writers = element.writers
//     this.actors = element.actors, 

//     // Modification du DOM
//     this.root = document.createElement('modal')
//     this.root.innerHTML = ''
//     this.modal_content = this.createDivWithClass('modal-content')
//     this.root.appendChild(this.modal_content)
//     this.close = document.getElementsByClassName('close')
//     this.html = `
//     <span class="close" id="close">&times;</span>
//     <div class="header-container">
//       <div class="header-title">
//         <h1>${this.title}</h1>
//       </div>
//       <div class="header-infos">
//         <div class="movie-infos1">
//           <ul class="movie-infos-list">
//             <li>${this.year}</li>
//           </ul>
//         </div>
//         <div class="movie-infos2">
//           <div class="imdb-rating">
//             <p>IMDb RATING</p>
//             <a href="#"><span class="material-icons">star</span> ${this.score}/10</a>
//             <p>${this.votes} votes</p>
//           </div>
//           <div class="my-rating">
//             <p>YOUR RATING</p>
//             <a href="#"><span class="material-icons">star_border</span>Rate</a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="body_container">
//       <div class="img_container">
//         <a><img src="${this.image_url}" alt="moviePicture"></a>
//       </div>
//       <div class="body-infos">
//         <div class="movies-infos-genres" id="movies-infos-genres"></div>
//         <div class="staff_infos">
//           <ul>
//             <li><p><span>Directors</span> <a href="#"> ${this.directors}</a></p></li>
//             <li><p><span>Writer</span><a href="#"> ${this.writers}</a></p></li>
//             <li><p id="actors_list"><span>Stars</span></p></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     `
//   this.modal_content.innerHTML = this.html
//   this.getGenres(this.genres)
//   this.getActors(this.actors)
//   }

//   getActors (actors) {
//     let actors_p = document.getElementById('actors_list')
//     actors.forEach(element => {
//       let a = document.createElement('a')
//       a.setAttribute('href', '#')
//       a.innerHTML = element + " "
//       actors_p.append(a)
//     });
//   }

//   getGenres (genres) {
//     let genres_div = document.getElementById('movies-infos-genres')
//     genres.forEach(element => {
//       let a = document.createElement('a')
//       a.setAttribute('class', '')
//       a.setAttribute('id', '')
//       a.innerHTML = element
//       genres_div.appendChild(a)
//     })
//   }
// }