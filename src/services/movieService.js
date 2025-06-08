
import Movie from "../models/Movie.js";
    
export default{
    async getAll( filter = {}) {

      let result =  await Movie.find({}).lean();
      // console.log(result);

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
        const movie = new Movie(movieData);
        //Return the created movie
        return movie.save();
    },
    getOne(movieId){
        const movie =  movies.find(movie => movie.id === movieId)
        return movie;
    }
} 
