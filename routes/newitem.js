revar express = require('express');
var router = express.Router();
var Item = require('../models/item');

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
    res.redirect('newitem');
  });

});

module.exports = router;
