import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import { Auth0Provider } from "@auth0/auth0-react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nppgztxoe54ub0n3.us.auth0.com"
      clientId="AmwNb7FghW0LOE0oq55OT7Ymyqja95ee"
      // domain: "dev-nppgztxoe54ub0n3.us.auth0.com",
      // applicationID: "AmwNb7FghW0LOE0oq55OT7Ymyqja95ee",
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <ConvexProviderWithAuth0 client={convex}>
        <App />
      </ConvexProviderWithAuth0>
    </Auth0Provider>
  </React.StrictMode>
);