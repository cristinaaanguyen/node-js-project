var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'eat'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){
  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
  console.log("receiving post request");
  //console.log(req.body);

    data.push(req.body);
    //console.log(data);
    res.render('todo', {todos:data});
  });


  app.delete('/todo/:item', function(req, res){
      data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
      });
      res.render('todo', {todos:data});
  });
};
