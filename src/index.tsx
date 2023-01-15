import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { IntlProvider } from "react-intl";
import { translationSets } from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <IntlProvider locale={navigator.language} defaultLocale={navigator.language} messages={translationSets.en}>
            <App />
        </IntlProvider>
    </React.StrictMode>
);
