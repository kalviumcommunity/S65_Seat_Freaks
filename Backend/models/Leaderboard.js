const mongoose = require("mongoose");

const LeaderboardSchema = new mongoose.Schema({
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "User",
       required: true 
    },
  points: {
     type: Number,
      default: 0 
    },
  rank: {
     type: Number 
    }
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);

