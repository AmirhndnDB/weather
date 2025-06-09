import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { NavProvider } from "./component/navigation";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <NavProvider>
    {/* chizi shabih react router vali sefareshi baraye modiriat url safhe ha  vali kam hajm va ekhtesasy */}
    <Provider store={store}>
      <App />
    </Provider>
  </NavProvider>
);
