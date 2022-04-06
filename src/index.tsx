import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import './globals.css';
import './i18next';

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </React.StrictMode>
);