import React from 'react';
import api from '../services/UserService';

var Actions = {

  getUser(context, params, done) {
    context.dispatch('GET_USER_START');
    api.getUser({id: params.id}, function (err, data) {
      if (err) {
        context.dispatch('GET_USER_FAILURE', err);
      } else {
        context.dispatch('GET_USER_SUCCESS', data);
      }
      done();
    });
  },

  getFollowers(context, params, done) {
    context.dispatch('GET_FOLLOWERS_START');
    var url = params.url;
    api.getFollowers({url: url}, function (err, data) {
      context.dispatch('GET_FOLLOWERS_SUCCESS', data);
      done();
    });
  },

  clearUser(context, params, done) {
    context.dispatch('CLEAR_USER');
  }
};

export default Actions;