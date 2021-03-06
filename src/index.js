import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/storeInitial";
import './assets/css/style.css';

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={configureStore()}>
    <Suspense fallback={<div className="loading" />}>
      <App />
    </Suspense>
  </Provider>
  ,
  document.getElementById("root")
);