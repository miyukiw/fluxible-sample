import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import actions from '../actions/UserAction';
import UserStore from '../stores/UserStore';

class User extends React.Component {
    componentWillUnmount() {
      this.context.executeAction(actions.clearUser, {});
    }
    render() {
        const { userData, isLoading } = this.props;

        var content;

        if (isLoading) {
          content = <p>Loading...</p>
        } else {
          content = null;
        }

        if (userData) {
          content = <div>
              <h1>{userData.login}</h1>
              <img src={userData.avatar_url} />
            </div>
        }

        return (
            <div>
              {content}
            </div>
        );
    }

}

User.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
User = connectToStores(User, [UserStore], function (context, props) {
    return {
        userData: context.getStore(UserStore).getUser(),
        isLoading: context.getStore(UserStore).isLoading()
    };
});

export default User;