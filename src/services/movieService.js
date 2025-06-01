
import { v4 as uuid } from "uuid";
import Movie, { movies } from "../models/Movie.js";
    
export default{
    getAll( filter = {}) {

      let result = movies.slice(); // shallow copy to preserve original

      if (filter.search) {
        const searchTerm = filter.search.toLowerCase();
        result = result.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm)
        );
      }
    
      if (filter.genre) {
        result = result.filter(movie =>
          movie.genre.toLowerCase() === filter.genre.toLowerCase()
        );
      }
    
      if (filter.year) {
        result = result.filter(movie =>
          movie.year === Number(filter.year)
        );
      }
    
      return result;
    },
    create(movieData){
      // Set unique id when creating a movie
      movieData.id = uuid();
      movieData.rating = Number(movieData.rating); // идва от инпута като стринг, конвертирай го
      // Push the movie into the array -- add it to movies
      movies.push(movieData);

      //Return the created movie
      return movieData;
    },
    getOne(movieId){
      const movie =  movies.find(movie => movie.id === movieId)
      return movie;
    }
} 
