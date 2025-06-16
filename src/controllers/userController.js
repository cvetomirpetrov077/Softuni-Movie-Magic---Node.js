import { Router } from "express";

const userController =  Router();

// Action

userController.get('/register', (req, res) => {
    
    res.send('Register Page');
})


export default userController;