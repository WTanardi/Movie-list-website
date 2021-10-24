// Toggle Nav
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// TMDB API
const API_KEY = 'api_key=247b6aa143f3f2c0b100c0cbdfb1ac99';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+ API_KEY;

const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function getColor(vote) {
    if(vote >= 8){
        return 'green'
    }else if (vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {id, title, poster_path, vote_average, overview,release_date} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <button id="myBtn${id}" class="myBtn">
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
            </button>
        `
        main.appendChild(movieElement);

        const moviePage = document.createElement('div');
        moviePage.classList.add('modal');
        moviePage.setAttribute("id", "myModal"+id)
        moviePage.innerHTML = `
            <div class="modal-content">
                <span id="close${id}"><i class="fas fa-times"></i></span>
                <div class="modal-poster">
                    <img src="${IMG_URL+poster_path}" alt="${title}">
                </div>
                <div class="modal-info">
                    <h2>${title}</h2>
                    <span>${vote_average}/10</span>
                    <h3 class="releasedate">Release Date</h3>
                    <p>${release_date}</p>
                    <h3>Overview</h3>
                    <p class="modal-overview">${overview}</p>
                </div>
            </div>
        `
        main.appendChild(moviePage);

        // Movie Modal
        var modal = document.getElementById("myModal"+id);
        var btn = document.getElementById("myBtn"+id);
        var span = document.getElementById("close"+id);

        btn.onclick = function() {
            modal.style.display = "block";
            document.body.style.position = "fixed";
        }

        span.onclick = function() {
            modal.style.display = "none";
            document.body.style.position = ""
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
}


// Search
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }
})

// Dark Mode
const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener ('change', () => {
    document.body.classList.toggle('dark');
})

// MMMMMMMMMMMMMMMMMMMMW0o;,,;lOXNNWMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMWk'.:do,..,;;cxXWMMMMMMMMMWN0OkOXWMMMMMMM
// MMMMMMMMMMMMMMMMMMMXc.;0Nd'.:ool,.:0WMMMMMMWXd;',,',oKMMMMMM
// MMMMMMMMMMMMMMMMMMMNo.,kx..dNWWWO'.oWMMMMMWKc.,xKKx,.lXMMMMM
// MMMMMMMMMMMMMMMMMMMMO,.,'.cXMMMM0'.oWMMMMMXl.;OWMMXl.;0MMMMM
// MMMMMMMWX0O0KNMMMMMMNx.  ,0WMMMWk..xWMMMMWx..xWMMWK:.cXMMMMM
// MMMMMWKl'','':ONMMMMMXl..lNMMMMXl.,OWMMMM0;.cXMMMWx..kWMMMMM
// MMMMMXc.,x0Ol..dNMMMMXo.,OWMMMM0; .oNMMMNo.,OMMMMXc.:KMMMMMM
// MMMMM0;.lXMMNd.'kNMMM0,.oNMMMMMk.  'kWMWx..dNMMMWk'.xNMMMMMM
// MMMMMXo.,OWMMXl.,OWMXo.,OWMMMWNd....;0WK:.:KMMMMXc.;KMMMMMMM
// MMMMMM0,.lNMMMK:.;0WO'.oNMMMMKk:.:x;.:Oo.,OWMMMWO,.oNMMMMMMM
// MMMMMMNx.'xWMMW0;.:kl.,0MMMMWkc'.dXO,.'..lNMMMMXo.;0WMMMMMMM
// MMMMMMMXc.;KMMMWO;....dNMMMMWd'.'OMWO:..cKWMMMM0,.lNMMMMMMMM
// MMMMMMMWO,.oXMMMWO,  ;0WMMMMNo..cKMMMX0OXMMMMMWx..kWMMMMMMMM
// MMMMMMMMNo.'OMMMMXl. .,lxKNMWXO0XWMMMMMMMMMMMMK:.cKMMMMMMMMM
// MMMMMMMMW0;.lXMMXo.'ldl;'':d0XNWMMMMMMMMMMMMMMO'.dWMMMMMMMMM
// MMMMMMMMMWx..kWM0,.lNMWN0d:,',;cok0XNWWWWWWWWMk..xMMMMMMMMMM
// MMMMMMMMMM0;.lXMXc.;0WMMMMWXOol:,,,,;;;:::clokd..xMMMMMMMMMM
// MMMMMMMMMMXc.:KWW0:.;kNMMMMMMWWWNX0kxoollllc,.. .dWMMMMMMMMM
// MMMMMMMMMMXl.:KWMWKo'.cONMMMMMMMMMMMMMMMMMMWXd' .oWMMMMMMMMM
// MMMMMMMMMMXl.;0WMMMW0l'.;okKNWMMMMMMMMMMMMMMMNo..dWMMMMMMMMM
// MMMMMMMMMMNd.,OWMMMMMWKkc,'';codkOKNWWWWWMMMMMx..xMMMMMMMMMM
// MMMMMMMMMMWk..xWMMMMMMMMWX0d'  .',,,;::clkNMMWd.'OMMMMMMMMMM
// MMMMMMMMMMMK:.:0WMMMMMMMMMW0,.'l0KOxollc:xNMWO,.lXMMMMMMMMMM
// MMMMMMMMMMMW0:.:0WMMMMMMMMNx.'lkWMMMMMMWWWMW0:.:0MMMMMMMMMMM
// MMMMMMMMMMMMW0c.'dKWMMMMMMNd.,dOWMMMMMMMMWXx,.:0WMMMMMMMMMMM
// MMMMMMMMMMMMMMNx;.,oONWMMMNk'.:xNMMMMMWN0d;.,dXWMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMXkc'',cdOKKO:..,xKX0Oxl;'':xKWMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMWKkl:,'',,'.  .','',:lkKNMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMWNKkdl::;;;:coxOKXWMMMMMMMMMMMMMMMMMMMM
// Made By: William Tanardi