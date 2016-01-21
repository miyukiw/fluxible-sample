import React from 'react';
import api from '../services/UserService';

var Actions = {

  getUser(context, payload, done) {
    context.dispatch('GET_USER_START');
    var userId = payload.get('params').get('id');
    api.getUser({id: userId}, function (err, data) {
      context.dispatch('GET_USER_SUCCESS', data);
      done();
    });
  },

  clearUser(context, payload, done) {
    context.dispatch('CLEAR_USER');
  }
};

export default Actions;