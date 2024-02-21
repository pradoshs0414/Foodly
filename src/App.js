import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Layout from "./Layout";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path="" element={<Body/>} />
      <Route path="about" element = {<About/>}/>
      <Route path="contact" element = {<ContactUs/>}/>
      

    </Route>
  )
)

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <RouterProvider router={route}/>
  </React.Fragment>
);
