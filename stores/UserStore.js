'use strict';
var createStore = require('fluxible/addons').createStore;

module.exports = createStore({
    storeName: 'UserStore',
    handlers: {
      'GET_USER_START': '_load_start',
      'GET_USER_SUCCESS': '_load_ok',
      'GET_USER_FAILURE': '_load_ng',
      'GET_FOLLOWERS_START': '_load_followers_start',
      'GET_FOLLOWERS_SUCCESS': '_load_followers_ok',
      'CLEAR_USER': '_clear'
    },
    isLoading() {
      return this.loading;
    },
    isLoadingFollowers() {
      return this.loadingFollowers;
    },
    getError() {
      return this.err;
    },
    getUser() {
      return this.user;
    },
    getFollowers() {
      return this.followers;
    },
    _load_start() {
      this.loading = true;
      this.emitChange();
    },
    _load_ok(data) {
      this.loading = false;
      this.user = data;
      this.followers = null;
      this.err = null;
      this.emitChange();
    },
    _load_ng(err) {
      this.loading = false;
      this.user = null;
      this.followers = null;
      this.err = err;
      this.emitChange();
    },
    _load_followers_start() {
      this.loadingFollowers = true;
      this.emitChange();
    },
    _load_followers_ok(data) {
      this.loadingFollowers = false;
      this.followers = data;
      this.emitChange();
    },
    _clear() {
      this.user = null;
      this.followers = null;
      this.emitChange();
    },
    dehydrate() {
      return {
        user: this.user,
        err: this.err
      };
    },
    rehydrate(state) {
      this.loading = false;
      this.user = state.user;
      this.err = state.err;
    }
});