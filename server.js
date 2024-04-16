const express =  require('express');
const app = express();
const logger = require('morgan')
const tourRouter=require('./Router/tourRouter');
const userRouter = require('./Router/userRouter');
const dotenv = require('dotenv')
app.use(express.json())
app.use(logger('dev'));



dotenv.config({path:'./.env'});
if(process.env.NODE_ENV ==='development')
{
    app.use(morgan('dev'));
}
//optional methods
// app.get('/api/v1/details',getALLTours);
// app.delete('/api/v1/details/:id', deleteTour );
// app.patch('/api/v1/details/:id',updateTour);
// app.post('/api/v1/create', addTour );
// app.get('/api/v1/details/:id', searchTour);
 



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
app.listen(PORT,()=>{
    console.log('Your app is running on the port http://localhost:5000')
});

