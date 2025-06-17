import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/* import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./App";
import "./index.css";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
); */
