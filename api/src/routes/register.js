const express = require('express') 
const router = express.Router();
const Auth = require('../models/User.js')



router.post('/Register', async (req, res) => {
    try {
        const { password, email } = req.body;

        const user = await Auth.findOne({ email });

        if (user) {
            return res.status(409).json({ success: false, error: 'User already exists' });
        }

      

        const newUser = await Auth.create({ password, email });

        
        res.status(201).json({
            success: true
           
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});
module.exports=router;

