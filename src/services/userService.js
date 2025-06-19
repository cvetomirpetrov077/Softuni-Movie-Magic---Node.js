import bcrypt from 'bcrypt'
import User from "../models/User.js"
import { generateAuthToken } from '../utils/authUtils.js';

export default {
    async register(userData){
                
        const user = await User.create(userData);
        const token = generateAuthToken(user);

        return token;
    },
     async login(email, password){
        // get user form database

        const user = await User.findOne({email});

        // check if use rxists in DB 

        if(!user){
            return new Error('No such user!');
        }

        // Validate password 
        const isValid = await bcrypt.compare(password, user.password);
        // първото е паролата която пристинга от логин
        // user.password е вече хешираната парола 

        // Return error if not 

        if(!isValid){
            return new Error('Invalid password');
        }

        // if valid - generate token 
      const token = generateAuthToken(user)

        // return token 
        return token;
    },
}

