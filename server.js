const express =  require('express');
const app = express();
const mongoose= require('mongoose');
const logger = require('morgan');
const tourRouter=require('./Router/tourRouter');
const userRouter = require('./Router/userRouter');
const dotenv = require('dotenv')
app.use(express.json())
app.use(logger('dev'));




dotenv.config({path:'./.env'});
if(process.env.NODE_ENV ==='development')
{
    app.use(logger('dev'));
}
//optional methods
// app.get('/api/v1/details',getALLTours);
// app.delete('/api/v1/details/:id', deleteTour );
// app.patch('/api/v1/details/:id',updateTour);
// app.post('/api/v1/create', addTour );
// app.get('/api/v1/details/:id', searchTour);
 
const DB_STRING = process.env.DATABASE_STRING;

mongoose.connect(DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("DB connection was successful");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


const  testTour =new   tour({
    name:'Ravi kumar',
    rating:4,
    duration:5,
    maxGroupSize:10,
    difficulty: 'medium',
    ratingsAverage: 4.2,
    price: 4500

})
testTour
.save()
.then(val => console.log(val))
.catch(err=>{
    console.log("Error: ",err.message)
});
//MIDDLEWARE 

app.use((req,res,next)=>{
    console.log('This is from middleware');
    next();
});

app.use((req,res,next)=>{
    req.requestTime =  new Date().toISOString();
    next();
})


// ROUTES
app.use('/api/v1/users',userRouter)
app.use('/api/v1/details', tourRouter)


const port = process.env.PORT || 5050;

app.listen(port,()=>{
    console.log('Your app is running on the port http://localhost:5000')
});

