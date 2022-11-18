import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

async function init() {
  //define default url as null
  let url = null;

  //check if in dev mode
  if (process.env.NODE_ENV === "development") {
    //set url to env var defined in dev mode
    url = process.env.REACT_APP_DEV_BACKEND;
  } else {
    try {
      //fetch url from /api_url route
      const fetchedUrl = await fetch("/api_url").then((res) => res.json());

      //set url to fetched url
      url = fetchedUrl.url;
    } catch (err) {
      //log error
      console.log(err);
    }
  }

  console.log(url);

  //check if url was found
  if (url) {
    //render react
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App url={url} />
      </React.StrictMode>,
    );
  }
}

init();
