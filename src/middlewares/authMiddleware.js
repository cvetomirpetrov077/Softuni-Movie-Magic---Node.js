import jsonWebtoken from 'jsonwebtoken'
import { jwtSecret } from '../config/general.js';


export const auth = (req, res, next) => {

    const token  = req.cookies['auth'];

    if (!token) {
        return  next(); // продължу
    }


    try {
            const { id , email } =  jsonWebtoken.verify(token, jwtSecret)
            
            req.user = { id, email }; 
            res.locals.user = { id, email };
            // автоматично инжектира във view енджина хандълбарс.. директно може от темплейтетите да достъпваме
            // времено слага данните по време на живота на рекуеста 

            next();

    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/users/login');
        // return new Error('Invalid token');
    }

}

export const isAuth = (req, res , next) =>{

    if(!req.user){
        return res.redirect('/users/login');
    }
        next();
}


