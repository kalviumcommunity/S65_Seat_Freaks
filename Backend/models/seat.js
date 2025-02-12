const mongoose = require("mongoose");

const SeatSchema = new mongoose.Schema({
  title: {
     type: String,
     required: true
     },
  address: {
     type: String,
      required: true
     },

  description: {
     type: String 
    },

  submittedBy: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true
     },
  FreaksScore: {
     type: Number,
      default: 0
     },
  images: [{ type: String }], 
  
  reactions: [{ 
    userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
         },
    emoji: { type: String }
  }]
}, {timestamps: true});

module.exports = mongoose.model("Seat", SeatSchema);