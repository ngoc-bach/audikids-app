import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./user_context";
// Domain: dev-0oe84avu42de8iem.us.auth0.com
// Client ID: frlhdg3bC02EeZ7JVcSpHbzGuf7tUR2e
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-0oe84avu42de8iem.us.auth0.com"
    clientId="frlhdg3bC02EeZ7JVcSpHbzGuf7tUR2e"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AppProvider>
  </Auth0Provider>,

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
