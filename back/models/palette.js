import mongoose from 'mongoose';

const tagSchema = mongoose.Schema({
  name: String
});

const paletteSchema =mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  hexCodes: {
    type: String,
    required: true,
    trim: true,
  },
  like: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default : Date.now
  },
  tags: [tagSchema]
})