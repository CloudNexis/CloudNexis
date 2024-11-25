import express from 'express';
import serverless from 'serverless-http'
import mongoose from 'mongoose';
import userRoutes from './src/routes/user.route.js';
import authRoutes from './src/routes/auth.route.js';
import postRoutes from './src/routes/post.route.js';
import commentRoutes from './src/routes/comment.route.js';
import cookieParser from 'cookie-parser';

//dotenv.config();

mongoose
  .connect('mongodb+srv://cloudnexis:admin@cloudnexis.4ahlb.mongodb.net/cloud-nexis?retryWrites=true&w=majority&appName=CloudNexis')
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

//export const handler = serverless(app)

app.get('/', (req,res)=>{res.send('Base works fine')});
app.get('/health', (req,res)=>{res.send('Service works fine')});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
