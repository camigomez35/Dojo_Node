var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/dojonode');

var userSchemaJSON = {
  name : String
}

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model("User", user_schema);

function save(req, res){
    var user = new User({ name: req.body.name});

    user.save(function(){
      res.send("El usuario ha sido guardado!!!");
    });
}

function getAll(req, res){
  User.find(function(err, doc){
    res.send(doc);
  });
}

module.exports = {
  save : save,
  getAll : getAll
}
