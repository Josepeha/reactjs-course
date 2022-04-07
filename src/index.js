import './index.css';
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const rootContainer = document.getElementById('root')
const root = createRoot(rootContainer)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

