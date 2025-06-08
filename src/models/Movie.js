import { model, Schema } from "mongoose";

const maxYearAllowed =  new Date().getFullYear() + 5;

const movieSchema = new Schema({
    title:{
        type: String,
        required : [ true, 'Title is requiered'],
    },
    category :{
        type: String,
        required :[ true, 'Category is requiered'],
    },
    genre:{
        type: String,
        required :[ true, 'Genre is requiered'],
    },
    director:{
        type: String,
        required :[ true, 'Director is requiered'],
    },
    year:{
        type: Number,
        required :[ true, 'Year is requiered'],
        min: 1970,
        max: [maxYearAllowed , `Year can't be larger then ${maxYearAllowed}`],
    },
    imageUrl:{
        type: String,
        required :[ true, 'Image is requiered'],
    },
    rating:{
        type: Number,
        required : [ true ,'Rating is requiered' ]
    },
   description:{
        type: String,
        required : [ true, 'Description is required'],
        maxLength: [100, 'Description is too long!'],
    },
});

const Movie = model('Movie', movieSchema);

export default Movie;

// import fs from 'node:fs/promises';
// import {v4 as uuid} from 'uuid';

// const moviesJSON = await fs.readFile('./src/database.json');
// export const movies = JSON.parse(moviesJSON);

// console.log(movies);

// export default class Movie {

//     constructor(data){
//         this.data = data;
//     }

//    async save(){

//        this.data.id = uuid();
//        this.data.rating = Number(this.data.rating);
       
//        movies.push(this.data);

//        await fs.writeFile('./src/database.json', JSON.stringify(movies, null, 4)); 

//        return this.data;
//    }
// }
