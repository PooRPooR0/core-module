import React from 'react';
import {Link} from "react-router-dom";
import * as classes from 'CustomCore/pages/main/ui/main-page.module.css'
import {a} from "CustomCore/pages/main";

const MainPage = () => {
    return (
        <div className={classes.container}>
            core main page {a}
            <Link to="/about">About</Link>
        </div>
    );
};

export default MainPage;
