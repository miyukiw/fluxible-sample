import React from 'react';
import { NavLink } from 'fluxible-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
                <NavLink routeName='user' navParams={{id: 'miyukiw'}}>miyukiw</NavLink>
            </div>
        );
    }
}

export default Home;
