// Create containers for messages and movies
const messageContainer = document.getElementById("message-container");
const movieContainer = document.getElementById("movie-container");

// Function to display a message on the web page
const displayMessage = (message) => {
    if (messageContainer) {
        const messageElement = document.createElement("p");
        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);
        document.body.appendChild(messageContainer); // Append to the bottom of the webpage
    } else {
        console.error("The 'message-container' element was not found in the HTML.");
    }
};

let allMovies = [];

// Define a movie class with parameters title (string), rating (number), and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

// Add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    updateMovieList();
};

// Create a function to initialize or update the movie list on the webpage
let updateMovieList = () => {
    if (movieContainer) {
        const totalMovies = allMovies.length;
        const moviesDiv = document.createElement("div");

        allMovies.forEach((movie, index) => {
            const { title, rating, haveWatched } = movie;
            const movieInfo = `<div class="movie">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Rating:</strong> ${rating}</p>
                <p><strong>Watched:</strong> ${haveWatched ? 'Yes' : 'No'}</p>
            </div>`;
            moviesDiv.innerHTML += movieInfo;
        });

        // Append the movies to the bottom of the webpage
        movieContainer.appendChild(moviesDiv);

        // Add the total number of movies
        const totalMoviesInfo = `<p>Total Number of Movies: ${totalMovies}</p>`;
        movieContainer.appendChild(document.createElement("hr")); // Add a horizontal line
        movieContainer.innerHTML += totalMoviesInfo;
    } else {
        console.error("The 'movie-container' element was not found in the HTML.");
    }
};

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    if (movieContainer) {
        const totalMovies = allMovies.length;

        // Create a new container for movies
        const newMovieContainer = document.createElement("div");
        newMovieContainer.className = "movie-container"; // You can add a CSS class for styling if needed

        allMovies.forEach((movie, index) => {
            const { title, rating, haveWatched } = movie;
            const movieInfo = `<div class="movie">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Rating:</strong> ${rating}</p>
                <p><strong>Watched:</strong> ${haveWatched ? 'Yes' : 'No'}</p>
            </div>`;
            newMovieContainer.innerHTML += movieInfo;
        });

        // Append the new container to the bottom of the webpage
        document.body.appendChild(newMovieContainer);
    } else {
        console.error("The 'movie-container' element was not found in the HTML.");
    }
}

// Display only the movies that have a rating higher than the specified value
let highRatings = (rating) => {
    const movieList = document.getElementById("movie-list");
    if (!movieList) {
        console.error("The 'movie-list' element was not found in the HTML.");
        return;
    }

    const highRatedMovies = allMovies.filter((movie) => movie.rating > rating);
    const totalMatches = highRatedMovies.length;

    const highRatedMoviesHTML = highRatedMovies.map((movie) => {
        const { title, rating, haveWatched } = movie;
        return `<div class="movie">
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Rating:</strong> ${rating}</p>
            <p><strong>Watched:</strong> ${haveWatched ? 'Yes' : 'No'}</p>
        </div>`;
    }).join(''); // Join the individual movie HTML elements.

    movieList.innerHTML = `<h2>Movies with Ratings > ${rating}</h2>`;
    movieList.innerHTML += highRatedMoviesHTML; // Append the high-rated movies.
    movieList.innerHTML += `<p>Total Number of Matches: ${totalMatches}</p>`;

    updateMovieList();
}

// Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
    const movieList = document.getElementById("movie-list");
    if (!movieList) {
        console.error("The 'movie-list' element was not found in the HTML.");
        return;
    }

    const movieToToggle = allMovies.find((movie) => movie.title === title);

    if (movieToToggle) {
        movieToToggle.haveWatched = !movieToToggle.haveWatched;

        // Create a new container for the movies
        const newMovieList = document.createElement("div");
        newMovieList.id = "movie-list";

        // Append the updated movie info.
        allMovies.forEach((movie) => {
            const { title, rating, haveWatched } = movie;
            const movieInfo = `<div class="movie">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Rating:</strong> ${rating}</p>
                <p><strong>Watched:</strong> ${haveWatched ? 'Yes' : 'No'}</p>
            </div>`;
            newMovieList.innerHTML += movieInfo;
        });

        // Replace the old movie list with the new one
        movieList.parentNode.replaceChild(newMovieList, movieList);
    } else {
        console.error(`Movie with title '${title}' not found.`);
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

displayMessage("running program......");
printMovies();

let movie1 = new Movie("Parasite", 2, false);
addMovie(movie1);
displayMessage("A new movie is added");
changeWatched("Spiderman");
displayMessage("Changing the status of the movie...");
printMovies();
changeWatched("Spiderman");
displayMessage("Changing the status of the movie again...");
printMovies();
displayMessage("Printing movies with high ratings");
highRatings(3.5);