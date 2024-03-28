import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Layout from "./Layout";
import { ChakraProvider } from '@chakra-ui/react'
import RestaurantMenu from "./RestaurantMenu";
import { Provider } from "react-redux";
import store from "./Redux/appStore";
import ShoppingCart from './Cart'
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path="" element={<Body/>} />
      <Route path="about" element = {<About/>}/>
      <Route path="contact" element = {<ContactUs/>}/>
      <Route path="restaurants/:resId" element = {<RestaurantMenu/>}/>
      <Route path="cart" element = {<ShoppingCart/>}/>
      

    </Route>
  )
)




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={store}>
    <ChakraProvider>
    <RouterProvider router={route}/>
    </ChakraProvider>
    </Provider>
  </React.Fragment>
);
