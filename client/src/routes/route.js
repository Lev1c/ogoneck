import { ADMIN_ROUTE, AUTH_ROUTE, HOME_ROUTE } from "./consts";

import Auth from "../components/admin/auth";
import Admin from "../components/admin/admin";
import Main from "../components/main/main";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
]

export const publicRoutes = [
    
    {
        path: HOME_ROUTE,
        Component: <Main/>
    },

    {
        path: AUTH_ROUTE,
        Component: <Auth/>
    },

]