import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import BodyComp from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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