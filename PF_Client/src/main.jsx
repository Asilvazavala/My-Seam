import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
// Configuración Auth0
import { Auth0Provider } from "@auth0/auth0-react";
const DOMAIN = import.meta.env.VITE_DOMAIN;
const CLIENTID = import.meta.env.VITE_CLIENTID;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Configuración Chakra
import { ChakraProvider, extendTheme  } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

// Configuración store
import { Provider } from "react-redux";
import store from "./redux/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENTID}
        backendUrl={BACKEND_URL}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </Auth0Provider>
    </StrictMode>
  </Provider>
);
