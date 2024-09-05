import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignupForm from "./components/SignUp-LogIn/signup";
import LoginForm from "./components/SignUp-LogIn/login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="user/signup" element={<SignupForm />} />
            <Route path="user/login" element={<LoginForm />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
