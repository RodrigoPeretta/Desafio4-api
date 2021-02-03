import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const gradesSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    min: 0,
  },
});

const gradesModel = mongoose.model('grades', gradesSchema, 'grades');

export { db, gradesModel };
