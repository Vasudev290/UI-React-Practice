import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import RestaurantMenu from "./Pages/RestaurantMenu";
//import Grocery from "./Pages/Grocery";
import UserContext from "./utils/Contexts/UserContext";
import { Provider } from "react-redux";
import Store from "./store";
import Cart from "./Pages/Cart";

const Grocery = lazy(() => import("./Pages/Grocery"));
const About = lazy(() => import("./Pages/About"));

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Vasu Dev",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={Store}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        // element: <About />,
        element: (
          <Suspense fallback={<h2>Loading...!</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...!</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
