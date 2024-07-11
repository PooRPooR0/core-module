import {RouteObject} from "react-router-dom";
import {MainPage} from "CustomCore/pages/main";
import {AboutPage} from "CustomCore/pages/about";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: 'about',
        element: <AboutPage/>
    }
]

export {routes};
