const express = require('express');
const Score = require('../models/Score.js'); 
const router = express.Router();



router.post('/scores', async (req, res) => {
    try {
      const { userId, gameMode, userPoint, computerPoint } = req.body;
  
      const score = new Score({
        userId,
        gameMode,
        userPoint,
        computerPoint,
      });
  
      await score.save();
  
      res.status(201).send('Skor oluşturuldu');
    } catch (error) {
      console.error(error);
      res.status(500).send('Sunucu hatası');
    }
  });
  module.exports=router;