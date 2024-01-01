const mongoose = require ('mongoose');

const ScoreSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gameMode: { type: String, required: true },
  userPoint: { type: Number, required: true },
  computerPoint: { type: Number, required: true },

})
module.exports=mongoose.model('Score',ScoreSchema)



