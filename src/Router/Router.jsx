import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: ErrorPage,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                Component: Home
            },
            {
                path: '/add-coffee',
                Component: AddCoffee
            },
            {
                path: '/update-coffee',
                Component: UpdateCoffee
            }
        ]
    }
])