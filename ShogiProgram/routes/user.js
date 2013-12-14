
/*
 * GET users listing.
 */

var programs = require('../programs/index.js');

exports.list = function(req, res){
  programs.index(req.params.usermove);
  res.send("respond with a resource");
};