import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Router/router.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store/Store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="mx-auto max-w-screen-xl">
          <RouterProvider router={router} />
        </div>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
