import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStateProvider } from "@/contexts/global-state";
import { Helmet } from "react-helmet";
import "./index.css";
import "@fontsource/poppins";
import "@fontsource/lilita-one";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStateProvider>
            <Helmet>
                <title>Sami Yousef</title>
                {/* Primary Meta Tags */}
                <meta
                    name="title"
                    content="Sami Yousef"
                />
                <meta
                    name="description"
                    content="Hi, I'm Sami, a full-stack developer"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.samiyousef.ca/" />
                <meta
                    property="og:title"
                    content="Sami Yousef"
                />
                <meta
                    property="og:description"
                    content="Hi, I'm Sami, a full-stack developer"
                />
                <meta
                    property="og:image"
                    content="https://www.samiyousef.ca/static/media/sami.4b3b3b7b.jpg"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.samiyousef.ca/" />
                <meta
                    property="twitter:title"
                    content="Sami Yousef"
                />
                <meta
                    property="twitter:description"
                    content="Hi, I'm Sami, a full-stack developer"
                />
                <meta
                    property="twitter:image"
                    content="https://www.samiyousef.ca/static/media/sami.4b3b3b7b.jpg"
                />
            </Helmet>
            <App />
        </GlobalStateProvider>
    </React.StrictMode>
);
