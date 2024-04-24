const mongoose= require('mongoose');

const tourSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating:{
        type: Number,
        default: 4.0
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have duration']
    },
    maxGroupSize:{
        type: Number,
        required: [true, 'A tour must have No.of.Peoples']
    },
    difficulty:{
        type: String,
        required: [true, 'A tour must need to mention the difficulty']
    },
    ratingsAverage:{
        type: String
    },
    price:{
        type: Number
    }
});
const tour = mongoose.model('Tour',tourSchema );

module.exports = Tour;