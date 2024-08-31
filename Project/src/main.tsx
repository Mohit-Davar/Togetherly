// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignupForm from "./components/SignUp-LogIn/signup";
import LoginForm from "./components/SignUp-LogIn/login";
import NotFound from "./components/Error/NotFound";
import ScrollProvider from "./Utils/scrollProvider";

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
        <ScrollProvider>
        <RouterProvider router={router} />
        </ScrollProvider>
    </React.StrictMode>
);
