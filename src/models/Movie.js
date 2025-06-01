import fs from 'node:fs/promises';

const moviesJSON = await fs.readFile('./database.json');
export const movies = JSON.parse(moviesJSON);

console.log(movies);

export default class Movie {

    constructor(data){
        this.data = data;
    }

   async save(){
       movies.push(this.data);

       await fs.writeFile('../database.json', JSON.stringify(movies, null, 4)); 

       return this.data;
   }
}
