import React, { useEffect, useState } from "react";

function App({ url }) {
  const [res, setRes] = useState({ mode: undefined, time: undefined });
  const [state, setState] = useState("loading");

  useEffect(() => {
    async function loader() {
      try {
        //fetch example data
        const result = await fetch(url + "/ping").then((res) => res.json());

        //update res
        setRes(result);

        //update loading
        setState("done");
      } catch (err) {}
    }

    loader();
  }, [url]);

  return <div className="App">{display(state, res)}</div>;
}

export default App;

function display(state, res) {
  switch (state) {
    case "error":
      return "Error fetching the Data";
    case "done":
      return `${process.env.NODE_ENV} frontend application fetched data from ${res.mode} backend server. Example data timestamp is ${res.time}`;
    default:
      return "Loading...";
  }
}
