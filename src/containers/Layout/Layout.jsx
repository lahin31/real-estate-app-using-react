import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'

const Layout = props => (
    <React.Fragment>
        <Toolbar></Toolbar>
        <main className="container">
            { props.children }
        </main>
    </React.Fragment>
);

export default Layout;
