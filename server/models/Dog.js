//require the Mongo DB library for nodejs
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//variable to hold model
let DogModel = {};

//Set parameters for a dog
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },

  age: {
    type: Number,
    required: true,
    trim: true,
    unique: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

//static method attached to the model
DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

//Create dog model based on Schema
DogModel = mongoose.model('Dog', DogSchema);

//export the public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
