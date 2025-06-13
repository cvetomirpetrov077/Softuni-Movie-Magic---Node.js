
import Movie from "../models/Movie.js";
import Cast from "../models/Cast.js";
    
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
    async getOne(movieId){
        const movie = await Movie.findById(movieId).populate('casts');
        return movie;
    },
    async attach(movieId, castId){
    
        // Option get movie, update movie, save movie
        const movie =  await this.getOne(movieId);
        movie.casts.push(castId);        // от Релацията в Movie.js
        return movie.save();
    },
    // async getCasts(movieId){
    //    const movie = await this.getOne(movieId);
    //    const casts = Cast.find({ _id: {$in: movie.casts}}); // mongo db way
    //    return casts;
    // }
} 
