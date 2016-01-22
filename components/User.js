import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import actions from '../actions/UserAction';
import UserStore from '../stores/UserStore';
import { NavLink } from 'fluxible-router';

class User extends React.Component {
    componentWillUnmount() {
      this.context.executeAction(actions.clearUser, {});
    }
    render() {
        const { error, userData, followers, isLoading, isLoadingFollowers } = this.props;

        let content, followersContent;

        if (isLoading) {
          content = <p>Loading...</p>
        } else if (error) {
          content = <p>{error.response.body.message}</p>
        } else {

          if (userData) {
            content = <div>
                <h1>{userData.login}</h1>
                <img src={userData.avatar_url} />
              </div>
          } else {
            followersContent = null;
          }

          if (!followers && userData && !isLoadingFollowers) {
            this.context.executeAction(actions.getFollowers, {url: userData.followers_url});
          } else if (followers) {
            var list = followers.map((user) => {
              return (
                <p>
                  <NavLink routeName='user' navParams={{id: user.login}}>{user.login}</NavLink>
                </p>
              );
            });


            followersContent = <div>
                <h2>Followers</h2>
                {list}
              </div>
          }

        }

        return (
            <div>
              {content}
              {followersContent}
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
        followers: context.getStore(UserStore).getFollowers(),
        error: context.getStore(UserStore).getError(),
        isLoading: context.getStore(UserStore).isLoading(),
        isLoadingFollowers: context.getStore(UserStore).isLoadingFollowers(),
    };
});

export default User;