const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/auth.routes');
const comicRouter = require('./routes/comics');
const quizRouter = require('./routes/quiz.routes');
const commentRouter = require('./routes/comment.route');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/comics',comicRouter); 
app.use('/api/v1/quiz',quizRouter);
app.use('/api/v1/comment',commentRouter)

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running and accessible on the local network at http://0.0.0.0:${PORT}`);
  });
