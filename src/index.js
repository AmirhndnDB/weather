import React from "react";
import ReactDom from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { NavProvider } from "./navigation";


const  el  = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
        <NavProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </NavProvider>
)
