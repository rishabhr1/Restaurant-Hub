import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import BodyComp from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery.js";
import Shimmer from "./components/shimmer.js";

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppComp = () => (
    <div>
        <Header />
        <Outlet />
    </div>
);



const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppComp />,
        children: [
            {
                path: "/",
                element: <BodyComp />
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement:<Error />,
    },
    
])

const heading = React.createElement("h1", { id: "heading" }, "Hey there");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);