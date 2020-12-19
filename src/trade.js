const express = require('express');
// const userRouter = require('./controller/user');
// const stockRouter = require('./controller/user');
const transactionRouter = require('./controller/user');
const app = express();

app.use(express.json())
// app.use('/', userRouter)
// app.use('/', stockRouter)
// app.use('/', transactionRouter)
app.listen( 3000,
             console.log(`Trade API is running port 3000`))

module.exports = app;
