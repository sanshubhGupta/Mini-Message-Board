const express = require('express');
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const messageRouter = require('./routes/messageRouter');
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/messageDetails', messageRouter);

const PORT = 8384;

app.listen(PORT, ()=>{
    console.log(`App listening on port, ${PORT}`);
});