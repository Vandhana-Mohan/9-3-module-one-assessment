/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  // Declararion
  let movieTitlesArray = []       // Initializing an empty array

  // Checking for Error
  if ( !movies.length ) {           // checking if given movies array is empty
    return movieTitlesArray
  }

  for( let element of movies ){   // using for..of loop to iterate through all movies, element is iterable
    movieTitlesArray.push( element.title )  // using array method push to get all the titles of movies
  } // End of for loop

  // Returning movies titles from an array of movies
  return movieTitlesArray   

} // End of function

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // checking for Error
  if ( !movies.length ) {           // checking if given movies array is empty
    return 0
  }

  // Declaration
  let highestMetascore = Number( movies[0].metascore  ) // Converting to Number type, since metascore is in string and we need number

  for(let i = 1; i < movies.length; i++){           // using a for loop from index 1 to movies.length to iterate through all movies
    if( highestMetascore < Number( movies[i].metascore )){   // checking if previous value less than current
        highestMetascore = Number( movies[i].metascore )    // re assigning current value to highestMetascore and running the loop till end.
    }
  } // end of for loop

  // Return the value of highest metascore among all movies

  return highestMetascore  
} // End of function

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {

  // checking for Error message
  if ( ! movies.length ) {           // checking if given movies array is empty
    return 0
  }

  // Declaration
  let sumIMDBRating = 0           // accumulator variable

  
  for( let element of movies ){     // using for..of loop to iterate through all movies, element is iterable
    sumIMDBRating += Number( element.imdbRating ) // movies.imdbRating is string so we are converting to Number type here
  } // End of for loop

  // calculating the average of all IMDB Ratings

  return (sumIMDBRating / movies.length) // movies.length - count of all movies, sumIMDBRating - has the sum of all movies.imdbrating
} // End of function

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // Declaration
  let objRating = {}                // Initializing an empty object

  // checking for Error message
  if ( ! movies.length ) {           // checking if given movies array is empty
    return objRating
  }

  for(let i = 0; i < movies.length; i++){    // Iterating through all movies with a for loop
    if( objRating [ movies[i].rated ] ){    // checking if rating (for eg. "G" ) exists - we using bracket notation for movie.rated as we dont have property
        objRating [ movies[i].rated ] += 1 // if rating exists add 1 
    } else {
      objRating [ movies[i].rated ] = 1    // else start count by 1
    }
  } // end for loop
  return objRating                        // Returning object 
} // end function

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies,id) {
  // checking for Error message
  if ( ! movies.length ) {           // checking if given movies array is empty
    return null
  }

  for (let element of movies){      // using a  for..of loop to iterate
    if(element.imdbID === id){      // checking if given id in parameter is strictly equal to movies.imdbID
      return element                // if true then return all movies based on the Id, - element refers to movies as its iterable
    }
  } // end for loop
  return null                       // return null if id does not match any movie
} // end function

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies,genre) {
  let moviesByGenreArray = []       // Initializing an empty array
  
  // checking for Error message
  if ( ! movies.length ) {           // checking if given movies array is empty
    return moviesByGenreArray
  }

  for( let i = 0; i < movies.length; i++ ){       // using for loop to iterate through all movies
    if ( movies[i].genre.toLowerCase().includes( genre.toLowerCase() ) ){ // converting all movies.genre to lowercase and given genre to lowercase and 
                                                                      // then checking if given genre is in movies object
      moviesByGenreArray.push( movies[i] )                            // If true then push movies with matching genre
    }
  } // end for loop
  return moviesByGenreArray                           // Return empty array if no matching genre or movies with a matching genre
} // end function

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {

  let moviesReleasedYearArray = []                  // Initializing an empty array

  for(  let i = 0; i < movies.length; i++ ){        // runnning for loop to iterate through all movies

    if( movies[i].released.slice(-4) <= year ){     // checking if movie.released year less than or equal to given year
                                                    // movie.released year is in dd-mm-yyyy format and given year is yyyy format, 
                                                    // so using slice (-4) to get last 4 digits
      moviesReleasedYearArray.push( movies[i] )     // if condition matches, then push movies which match the year
    }
  } // end of for loop
  return moviesReleasedYearArray                    // return all movies which match to equal or less than the given year
} // end of function

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {

   // checking for Error message
   if ( ! movies.length ) {           // checking if given movies array is empty
    return null
  }

  let biggestBoxOffice = Number( movies[0].boxOffice.slice(1).split(',').join('') ) // movie.boxoffice is string with symbols $, comma so converting to number type
                                                                                    // using slice(1) to remove dollar
                                                                                    // splitting into array with comma as separator
                                                                                    // joining back into string and finally change to number type
                                                                                    // assigning index 0 in case if there are negative values

  let boxOfficeMovieName = movies[0].title                                          // initializing movie name of index 0 


  for( let i = 0; i < movies.length; i++ ){                                         // iterating through a for loop to all movies
    let movieBoxOffice = Number( movies[i].boxOffice.slice(1).split(',').join('') ) // block scope variable to avoid repe
    if ( biggestBoxOffice < movieBoxOffice ){                    // checking previous value with next
        biggestBoxOffice = movieBoxOffice                       // assigning the highest value
        boxOfficeMovieName = movies[i].title                    // assign the name of movie with highest box office amount
    }
  }
  return boxOfficeMovieName                                 // return name of the movie with the highest `boxOffice` amount.
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
