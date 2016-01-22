'use strict';
import request from "superagent";

module.exports = {
  getUser: function(params, callback) {
    var url = 'https://api.github.com/users/' + params.id;
    request.get(url)
    .end((err, res) => {
      if (err) {
        return callback(err);
      }

      callback(null, res.body);
    });
  },

  getFollowers: function(params, callback) {
    request.get(params.url)
    .end((err, res) => {
      if (err) {
        return callback(err);
      }

      callback(null, res.body);
    });
  },
};