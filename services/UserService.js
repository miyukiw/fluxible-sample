'use strict';
import request from "superagent";

module.exports = {
  getUser: function(params, callback) {
    var url = 'https://api.github.com/users/' + params.id;
    request.get(url)
    .end((err, res) => {
      if (err) {
        return done(err);
      }

      callback(null, res.body);
    });
  }
};