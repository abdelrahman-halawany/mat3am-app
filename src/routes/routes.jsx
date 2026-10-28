import DashBoard from "../dashboard";
import ErrorPage from "../error404";
import Landing from "../landing";
import AreaPage from "../pages/dash/areas";
import CategPage from "../pages/dash/categories";
import ClientsPage from "../pages/dash/clients";
import DashHome from "../pages/dash/dashhome";
import ItemsPage from "../pages/dash/items/items";
import OffersPage from "../pages/dash/offers";
import LoginPage from "../pages/dash/login";
import About from "../pages/ui/about";
import Contact from "../pages/ui/contact";
import Home from "../pages/ui/home";

export const routes =[
    {
        path: "/",
        element: <Landing/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element: <Contact/>
            }

        ]
    },
    {
        path: "/sys",
        children:[
            {
                index: true,
                element: <LoginPage/>
            },
            {
                element: <DashBoard/>,
                children: [
                    {
                        path:"dashboard",
                        element: <DashHome/>,
                    },
                    {
                        path:"area",
                        element: <AreaPage/>
                    },
                    {
                        path:"categories",
                        element: <CategPage/>
                    },
                    {
                        path:"items",
                        element: <ItemsPage/>
                    },
                    {
                        path:"offers",
                        element: <OffersPage/>
                    },
                    {
                        path:"clients",
                        element: <ClientsPage/>
                    },
                  
                ]
            }
            

        ]

    },
    {
        path: "*",
        element: <ErrorPage/>
    },
];