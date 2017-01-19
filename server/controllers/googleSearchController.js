var request = require('request');

var googleSearch = function(company) {
  return new Promise(function(resolve, reject) {
    request({
      'url': process.env.GOOGLE_URL,
      'qs': {
        'key': process.env.GOOGLE_KEY,
        'cx': process.env.GOOGLE_ID,
        'q': company,
        'type': 'application/json'
      }
    }, function(error, response, body) {
      if(error) {
        reject(error);
      }else {
        resolve(Buffer(body).toString());
      }
    });
  });
};


module.exports = googleSearch;
