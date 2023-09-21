import React, {JSX} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";

import Home from './models/Home';
import AboutMe from './models/AboutMe';
import Projects from './models/Projects';

import {Route} from "./static/types";

const ROUTES: Route[] = [
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
    },
    {
        path: "/projects",
        element: <Projects />,
    }
];

export default function initRouter() {
    const router = createBrowserRouter(ROUTES);

    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );

    reportWebVitals();
}