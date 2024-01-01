const express = require('express') 
const router = express.Router();
const User = require('../models/User.js')

router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      const pass = await User.findOne({ password });
      if (!user) {
        return res.status(401).json({ success: false, error: 'Invalid email or password' });
      }
  
      
  
      if (!pass) {
        return res.status(401).json({ success: false, error: 'Invalid email or password' });
      }
  
      res.json({ success: true, user });
      
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  module.exports= router
  
 