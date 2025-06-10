const {Router} = require("express")
const messages = require("../data/messages")

const indexRouter = Router();


indexRouter.get('/', (req, res)=>{
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.post('/', (req, res)=>{
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) });
    res.redirect("/");
});


module.exports = indexRouter;