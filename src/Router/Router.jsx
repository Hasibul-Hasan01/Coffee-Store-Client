import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails/CoffeeDetails";
import SignUp from "../Authentication/SignUp/SignUp";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUpNew from "../Authentication/SignUp/SignUpNew";

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
                path: '/coffee/:id',
                loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
                Component: CoffeeDetails
            },
            {
                path: '/update-coffee/:id',
                loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
                Component: UpdateCoffee
            },
            {
                path: '/coffee-details/:id',
                loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
                Component: CoffeeDetails
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/signin',
                Component: SignIn
            },
            {
                path: '/newsignup',
                Component: SignUpNew
            }
            
        ]
    }
])