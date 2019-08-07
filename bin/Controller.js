const mongoose = require("mongoose");
const User = require("./models/User");

class Controller{
 constructor(){
     this.connect();
 }
 async connect(){
     try{
       await mongoose.connect(
           "mongodb+srv://preposlogsusers:ado123@@@cluster0-8jsv4.mongodb.net/actividadDB?retryWrites=true&w=majority",
           {useNewUrlParser:true}
       );
       console.log("conectado a la base de datos")
     }catch(e){
         console.error(e)
     }
 }

getUsers(res){
    User.find({}, (err, users)=>{
    if(err) throw err;

    res.send( users );
    } )
}

postUsers(req, res){
      let user = req.body.users;
      User.create( user, (err, newUser)=>{
          if(err) throw err;
          res.send({newuser:newUser})
      })
}

}

exports.controller = new Controller()