import jsonWebtoken from 'jsonwebtoken'
import { jwSecret } from '../config/general.js';


export const auth = (req, res, next) => {

    const token  = req.cookies['auth'];

    if (!token) {
        return  next(); // продължу
    }


    try {
            const decodedToken =  jsonWebtoken.verify(token, jwSecret)

            next();

    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/users/login');
        // return new Error('Invalid token');
    }
}