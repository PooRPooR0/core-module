import {RouteObject} from "react-router-dom";
import {AboutPage} from "@src/pages/about";
import {MainPage} from "@src/pages/main";

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
