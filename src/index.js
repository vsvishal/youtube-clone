import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import store, { persistor } from "./utils/redux/store";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <MainContainer />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={appRouter} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
