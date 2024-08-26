import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home/Home.tsx";
import SignupForm from "./components/SignUp-LogIn/signup.tsx";
import LoginForm from "./components/SignUp-LogIn/login.tsx";
import NotFound from "./components/Error/NotFound.tsx";

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<NotFound />}>
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
