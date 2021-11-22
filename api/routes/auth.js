const router = require("express").Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

 //REGISTER
 router.post("/register", async (req, res) => {
   try {
      const user = await User.findOne({ username: req.body.username });
      if (user) { 
         res.status(400).json("The Username is already taken");   
         return;  
      }
      const email = await User.findOne({ email: req.body.email });
      if (email) { 
         return res.status(400).json("This email is taken. Do you already have an account?"); 
      }
      else {
         const salt = await bcrypt.genSalt(10);
         const hashedPass = await bcrypt.hash(req.body.password, salt);
         const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hashedPass,
      });
        const user = await newUser.save();
        res.status(200).json(user);
      }
   } catch (err) {
     res.status(500).json(err);
   }
 });


//LOGIN
 router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
         res.status(401).json("Wrong credentials!");   
         return;  
      }
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (validated) {
         const { password, ...others } = user._doc;
         res.status(200).json(others);
      } else {
         res.status(401).json("Wrong credentials!"); 
      }
    } catch (err) {
      res.status(500).json(err);
    }
 });

 
module.exports = router;