const express = require('express');
const { loginRouter, userRouter, categoryRouter } = require('./routes');
const { handleServerError } = require('./middlewares');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);

app.use(handleServerError);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
