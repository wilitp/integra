import React from 'react';
import Header from '../Header/Header';
import '../../global.scss';
import classes from './Layout.module.scss';
import Footer from '../Footer/Footer';
const Layout = (props) => {

    const spacer = props.notIndex ? <div style={{height: "60px", width: "100%"}}></div> : null;

    return (
        <React.Fragment>
            <Header />
            {spacer}
            <div className={classes.container}>
                {props.children}
            </div>
        </React.Fragment>
    );
};

export default Layout;
