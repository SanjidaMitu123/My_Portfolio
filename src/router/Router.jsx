import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ErrorPage from "../shared/ErrorPage";
import Home from "../Home";
import Projects from "../pages/Projects";
import About from "../pages/About";




const myRoute = createBrowserRouter([{


    path : "/",
    element : <MainPage></MainPage>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
        {
            path : "/",
            element : <Home> </Home>,
            loader : ()=> fetch('/public/data.json')
        },
        {
            path : "/projects",
            element : <Projects></Projects>
        },
        {
            path : "/about",
            element : <About></About>
        }
       
    ]

}]) 

export default myRoute;