import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Router/router.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="mx-auto max-w-screen-xl">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
