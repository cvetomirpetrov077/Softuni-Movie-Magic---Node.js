
import Movie from "../models/Movie.js";
import Cast from "../models/Cast.js";
    
export default{
    async getAll( filter = {}) {
      let query = Movie.find();

      // let result =  await Movie.find({}).lean();
      // console.log(result);

      if (filter.search) {
        query = query.find({title: {$regex: new RegExp(filter.search, 'i')}});
      }
    
      if (filter.genre) {
        query = query.find({ genre: filter.genre.toLowerCase()})
      }
    
      if (filter.year) {
        // query = query.find({ year: filter.year }); 
        query = query.where('year').equals(filter.year);
      }
    
      return query;
    },
    create(movieData, userId){
        const movie = new Movie(movieData);
        // const movie = new Movie(...movieData, owner: userId);

        movie.owner = userId;
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
