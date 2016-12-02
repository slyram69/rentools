var express = require('express');
var router = express.Router();
var Item = require('../models/item');


//user dashboard
router.get('/', function(req, res, next){
  Item.find({}, function(err, items){

    res.render('newitem', {title:"new item", items: items});
    //res.send(items);
  });
});
router.post('/', function(req, res, next){

  var item = new Item(req.body);

  //multer - get image from multer and set path
  var multer_image = "";
  req.file ? multer_image = `/images/uploads/${req.file.filename}` : multer_image = `/images/uploads/default.jpg`;

  //now set item.image to multer_image url
  item.image = multer_image;

  item.save(function(err){
    if(err)res.send(err);
    res.redirect('newitem', {title: "add item"});
  });
});
//////////////////////////////////////////////////////////////////////

//page with form to add item
router.get('/additem', function(req, res, next){

    res.render('additem', {title:"Add new item"});
});
router.post('/additem', function(req, res, next){

  var item = new Item(req.body);

  //multer - get image from multer and set path
  var multer_image = "";
  req.file ? multer_image = `/images/uploads/${req.file.filename}` : multer_image = `/images/uploads/default.jpg`;

  //now set item.image to multer_image url
  item.image = multer_image;

  console.log(item);
  item.save(function(err){
    if(err)res.send(err);
    res.redirect('/newitem');
  });
});


///////////////////////////////////////////////////////////////////


//go to page of specific item
///////////////////////////////////////////////////////////////////
router.get('/:id', function(req, res, next){
  var id = req.params.id;
  Item.findById(id, function(err, items) {
    if(err){
      console.log("item not found")
      }
    else {
       res.render('test', {title: 'specific item page', items:items})
     }
  });
});

///delete item
//////////////////////////////////////////////////////////////
router.post('/:id', function(req, res, next){
  console.log('im in route')


  var id = req.params.id;
  console.log(id);

  Item.remove({_id:id}, function(err){
    if(err){
      console.log('item not found');
    }
    else{
      res.redirect('/newitem');
    }
  });
});




module.exports = router;
