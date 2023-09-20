import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";

import Home from './models/Home';
import AboutMe from './models/AboutMe';

export default function initRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about-me",
            element: <AboutMe />,
        },
        {
            path: "/about",
            element: <AboutMe />,
        }
    ]);

    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );

    reportWebVitals();
}