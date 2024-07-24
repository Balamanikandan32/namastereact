import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(()=>import("./components/Grocery"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path : "/",
        element: <Body />,
      },
      {
        path : "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path: '/grocery',
        element:<Suspense fallback = "<>loading..</>" ><Grocery /></Suspense>
      },
      {
        path : "/restaurantmenu/:restid",
        element : <RestaurantInfo />
      }
    ],
    errorElement : <Error />
  },
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
