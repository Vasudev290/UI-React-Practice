import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import RestaurantMenu from "./Pages/RestaurantMenu";
//import Grocery from "./Pages/Grocery";


/**
 Optimising our App
 1, Chunking
 2, Code Spliting
 3, Dynamic Bundling
 4, Lazy Loading
 5, on Demand Loading
 5, Dynamic import
 */

 const Grocery = lazy(() => import("./Pages/Grocery"))
 const About = lazy(() => import("./Pages/About"))

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/> 
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body/>,
      },
      {
        path: "/about",
        // element: <About />,
        element: <Suspense fallback={<h2>Loading...!</h2>}><About /></Suspense> ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h2>Loading...!</h2>}><Grocery /></Suspense> ,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
