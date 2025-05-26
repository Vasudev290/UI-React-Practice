import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
