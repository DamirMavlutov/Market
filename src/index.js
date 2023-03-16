import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { rootREduser } from "./redux/rootREduser";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const store = createStore(rootREduser);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
