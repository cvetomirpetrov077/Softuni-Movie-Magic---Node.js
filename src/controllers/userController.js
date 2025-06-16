import { Router } from "express";

const userController =  Router();

// Action

userController.get('/register', (req, res) => {
    
    res.render('user/register');
})


export default userController;