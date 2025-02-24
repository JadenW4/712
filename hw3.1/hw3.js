/* 
Jaden Wiltshire
Homework 3 
*/

class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    // Method to return movie details as a string
    getDetails() {
        return `${this.title}, directed by ${this.director}, released in ${this.year}`;
    }
}

class MovieCollection {
    constructor() {
        this.movies = [];
    }

    // Method to add a movie to the collection
    addMovie(movie) {
        if (movie instanceof Movie) {
            this.movies.push(movie);
        } else {
            console.error("Only instances of the Movie class can be added.");
        }
    }

    // Method to remove a movie by title
    removeMovie(title) {
        const movieIndex = this.movies.findIndex(movie => movie.title === title);
        if (movieIndex !== -1) {
            this.movies.splice(movieIndex, 1);
        } else {
            throw new Error(`Movie with title "${title}" not found in the collection.`);
        }
    }

    // Method to display all movies
    showMovies() {
        if (this.movies.length === 0) {
            throw new Error("No movies in the collection.");
        }

        console.log("Movies in Collection:");
        this.movies.forEach(movie => {
            console.log(movie.getDetails());
        });
    }
}

// Example Usage
try {
    const collection = new MovieCollection();
    const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
    const movie2 = new Movie("The Dark Knight", "Christopher Nolan", 2008);

    collection.addMovie(movie1);
    collection.addMovie(movie2);

    collection.showMovies();

    // Attempt to remove a non-existent movie
    collection.removeMovie("The Matrix");

} catch (error) {
    console.error(error.message);
}

