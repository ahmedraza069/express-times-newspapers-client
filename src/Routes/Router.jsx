import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AddArticle from "../Pages/AddArticle/AddArticle";

import Subscription from "../Pages/Subscription/Subscription";
import MyArticle from "../Pages/MyArticle/MyArticle";
import PremiumArticles from "../Pages/PremiumArticles/PremiumArticles";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AllArticle from "../Pages/AllArticle/AllArticle";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layouts/Dashboard";
import Summary from "../Pages/DashBoard/Summary/Summary";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AllArtilces from "../Pages/DashBoard/AllArticles/AllArtilces";
import AddPublisher from "../Pages/DashBoard/AddPublisher/AddPublisher";
import ArticleDetails from "../components/ArticleDetails/ArticleDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateMyArticle from "../Pages/MyArticle/UpdateMyArticle";
import ErrorPage from "../ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "add-articles",
        element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>,
      },
      {
        path: "all-articles",
        element: <AllArticle></AllArticle>,
      },
      {
        path: "all-articles/:id",
        element: <ArticleDetails></ArticleDetails>,
        loader: ({params}) => fetch(`https://express-times-newspapers-server.vercel.app/allArticles/${params.id}`)
      },
      {
        path: "subscription",
        element: <PrivateRoute><Subscription></Subscription></PrivateRoute>,
      },
      {
        path: "my-articles",
        element: <PrivateRoute><MyArticle></MyArticle></PrivateRoute>,
      },
      {
        path: "my-articles/:id",
        element: <ArticleDetails></ArticleDetails>,
        loader: ({params}) => fetch(`https://express-times-newspapers-server.vercel.app/allArticles/${params.id}`)
      },
      {
        path: 'update-article/:id',
        element: <UpdateMyArticle></UpdateMyArticle>,
        loader: ({params}) => fetch(`https://express-times-newspapers-server.vercel.app/allArticles/${params.id}`)
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "premium-articles",
        element: <PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>,
      },
      {
        path: "profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "summary",
        element: <Summary></Summary>,
      },
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "all-articles",
        element: <AllArtilces></AllArtilces>,
        
      },
      {
        path: "add-publisher",
        element: <AddPublisher></AddPublisher>,
      },
    ],
  },
]);
