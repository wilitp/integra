import React, { useState } from 'react';
import Header from '../Header/Header';
import '../../global.scss';
import classes from './Layout.module.scss';
import Footer from '../Footer/Footer';
import MobileDrawer from '../MobileMenu/MobileMenu';
const Layout = (props) => {

    const spacer = props.notIndex ? <div style={{ height: "60px", width: "100%" }}></div> : null;
    const [drawer, setDrawer] = useState(false);


    const showDrawerHandler = () => {
        setDrawer(true);
    }
    const hideDrawerHandler = () => {
        setDrawer(false);
    }

    return (
        <div style={{background: "#333"}}>
            {drawer ? <MobileDrawer onHide={hideDrawerHandler} /> : null}
            <Header notIndex={props.notIndex} close={drawer} onToggle={drawer ? hideDrawerHandler : showDrawerHandler}/>
            {spacer}
            <div className={classes.container}>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
