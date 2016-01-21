'use strict';
var createStore = require('fluxible/addons').createStore;

module.exports = createStore({
    storeName: 'UserStore',
    handlers: {
      'GET_USER_START': '_load_start',
      'GET_USER_SUCCESS': '_load_ok',
      'CLEAR_USER': '_clear'
    },
    isLoading() {
      return this.loading;
    },
    getUser() {
      return this.user;
    },
    _load_start() {
      this.loading = true;
      this.emitChange();
    },
    _load_ok(data) {
      this.loading = false;
      this.user = data;
      this.emitChange();
    },
    _clear() {
      this.user = null;
      this.emitChange();
    },
    dehydrate() {
      return {
        user: this.user
      };
    },
    rehydrate(state) {
      this.user = state.user;
    }
});