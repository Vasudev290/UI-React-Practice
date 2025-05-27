import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import RestaurantMenu from "./Pages/RestaurantMenu";

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
