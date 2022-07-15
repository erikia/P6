// Base url of the site 
const base_url = "http://localhost:8000/api/v1/titles/"

// Requests for movies data 
const requests = {
  fetchTrending: "http://localhost:8000/api/v1/titles/?sort_by=-votes%2C-imdb_score&page_size=10",
  fetchAdventure: "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchFantasy: "http://localhost:8000/api/v1/titles/?genre=Fantasy&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchTriller: "http://localhost:8000/api/v1/titles/?genre=Thriller&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchRomance: "http://localhost:8000/api/v1/titles/?genre=Romance&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchAnimation: "http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-votes%2C-imdb_score&page_size=10",
  fetchComedy: "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-votes%2C-imdb_score&page_size=10",
};

// Main banner
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const setTitle = data.results[2].title;
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
    row.classList.add("movierow");
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
      createModal(poster, movie)
    });
  });

// Romance Movies
fetch(requests.fetchRomance)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("movierow");
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
      createModal(poster, movie)
    });
  });

// Triller Movies
fetch(requests.fetchTriller)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("movierow");
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
      createModal(poster, movie)
    });
  });


// Animation Movies
fetch(requests.fetchAnimation)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("movierow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Animation Movies";
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
      row_posters.appendChild(poster);
      createModal(poster, movie)



    });
  });

// Comedy Movies
fetch(requests.fetchComedy)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("movierow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
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
      row_posters.appendChild(poster);
      createModal(poster, movie)



    });
  });

// Trending
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("movierow");
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
      row_posters.appendChild(poster);
      createModal(poster, movie)



    });
  });


// _________________________________________  MODAL ________________________________________________

const createModal = async function (poster, film) {
  const headrow = document.getElementById("headrow");
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "modal";
  headrow.appendChild(modal);

  poster.onclick = function () {
    modal.style.display = 'flex';
    modal.innerHTML = (
      `<p class="modal-content" id="modal-content">
            <span class="close" id="close">&times;</span>`+ "<br>" +
      `<img src=${film.image_url}>` +
      `<b>Title:</b> ${film.title}` + "<br>" + "<br>" +
      `<b>Genre:</b> ${film.genres}` + "<br>" + "<br>" +
      `<b>Year:</b> ${film.year}` + "<br>" + "<br>" +
      `<b>Imdb Score:</b> ${film.imdb_score}` + "<br>" + "<br>" +
      `<b>Directors:</b> ${film.directors}` + "<br>" + "<br>" +
      `<b>Actors:</b> ${film.actors}</p>`)

  }
  modal.onclick = function () {
    modal.innerHTML = " "
    modal.style.display = "none"
  }

} 
