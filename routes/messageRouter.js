const {Router} = require("express");
const messages = require("../data/messages")

messageRouter = Router();

messageRouter.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const message = messages[id];
    if(message){
        res.render("messageDetails", {title: "Message Detail", message})
    }
    else{
        res.status(404).send("message not found");
    }
})

module.exports = messageRouter;