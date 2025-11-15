import {createRoot} from 'react-dom/client'
import './app.css'
import {StrictMode} from "react";

// @ts-ignore
import {App} from "./App.tsx";


createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App/>
    </StrictMode>
    );