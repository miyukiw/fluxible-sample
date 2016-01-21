import userAction from '../actions/UserAction';

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home'),
        navLink: true
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About'),
        navLink: true
    },
    user: {
        path: '/users/:id',
        method: 'get',
        page: 'user',
        title: 'User',
        handler: require('../components/User'),
        action: (context, payload, done) => {
            console.log(payload.toJS()); //show params
            console.log(payload.get('params').get('id')); //show id
            context.executeAction(userAction.getUser, payload, function(){
              done();
            });
        }
    }
};
