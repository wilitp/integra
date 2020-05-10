import React, { useState } from 'react';
import favicon from '../../static/assets/favicon.ico';
import Header from '../Header/Header';
import '../../global.scss';
import classes from './Layout.module.scss';
import Footer from '../Footer/Footer';
import MobileDrawer from '../MobileMenu/MobileMenu';
import { Helmet } from 'react-helmet';
const Layout = (props) => {

    const spacer = props.notIndex ? <div style={{ height: "70px", width: "100%" }}></div> : null;
    const [drawer, setDrawer] = useState(false);


    const showDrawerHandler = () => {
        setDrawer(true);
    }
    const hideDrawerHandler = () => {
        setDrawer(false);
    }

    return (
        <>
        <div style={{background: "#333"}}>
            {drawer ? <MobileDrawer onHide={hideDrawerHandler} /> : null}
            <Header notIndex={props.notIndex} close={drawer} onToggle={drawer ? hideDrawerHandler : showDrawerHandler}/>
            {spacer}
            <div className={classes.container}>
                {props.children}
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Layout;
