
import { v4 as uuid } from "uuid";

const movies = [
    {
      id: "1",
      title: "Avengers: Infinity War",
      genre: "Action, Sci-Fi",
      description: "The Avengers must stop Thanos before he collects all the Infinity Stones and wipes out half of all life.",
      imageUrl: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      year: 2018,
      rating: 8.4,
      category: "movie"
    },
    {
      id: "2",
      title: "Avengers: Endgame",
      genre: "Action, Sci-Fi",
      description: "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' destruction.",
      imageUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      year: 2019,
      rating: 8.4,
      category: "movie"
    },
    {
      id: "3",
      title: "The Grand Budapest Hotel",
      genre: "Comedy, Adventure",
      description: "A legendary concierge and his trusted lobby boy become involved in the theft of a priceless painting and a family feud.",
      imageUrl: "https://m.media-amazon.com/images/I/71JiBJhmqFL._AC_UF894,1000_QL80_.jpg",
      year: 2014,
      rating: 8.1,
      category: "movie"
    },
    {
      id: "4",
      title: "The Martian",
      genre: "Adventure, Sci-Fi, Drama",
      description: "An astronaut stranded on Mars must rely on his ingenuity to survive until a rescue mission can reach him.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg",
      year: 2015,
      rating: 8.0,
      category: "movie"
    }
  ];
  
    

export default{
    getAll( filter = {}) {

      let result = movies.slice();

      if(filter.search){
        result = result.filter(movie => movie.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()));
      }
      
        return result;
    },
    create(movieData){
      // Set unique id when creating a movie
      movieData.id = uuid();
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
