import {createBrowserRouter, RouteObject} from "react-router-dom";
import {MainPage} from "../../pages/main";

const routes: RouteObject[] = [{
    path: '/',
    element: <MainPage/>
}]

const router = createBrowserRouter(routes)

export {routes, router}
