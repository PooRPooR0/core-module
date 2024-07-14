import {RouteObject} from "react-router-dom";
import {AboutPage} from "CustomCore/pages/about";
import {MainPage} from "CustomCore/pages/main";

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

export default routes;
