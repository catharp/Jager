var mongoose = require('mongoose');
var userController = require('./controllers/userController.js');
var jobsController = require('./controllers/jobsController.js');


var getUser = function(req, res) {
  userController.retrieveUser(req.query.username).then(function(user) {
    if(user === null) {
      console.log('user not found');
      res.sendStatus(204);
    }else {
      console.log(user);
      res.status(200).json(user);
    }
  }).catch(function(err) {
    console.log(err);
    res.status(500).json(err);
  });
};

var postUser = function(req, res) {
  userController.addUser(req.body).then(function(user) {
    console.log('a user was added to the database :): ', user);
    res.status(201).json(user);
  }).catch(function(err) {
    console.log(err);
    res.status(400).json(err);
  });
};

var getJobs = function(req, res) {
  var username = req.headers.username;
  jobsController.getJobsFromDb(username)
  .then(function(jobs) {
    res.send(jobs);
  })
}

module.exports.postUser = postUser;
module.exports.getUser = getUser;
module.exports.getJobs = getJobs;
