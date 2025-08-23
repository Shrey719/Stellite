/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";

import routeError from "./views/routeError/routeError.jsx";
import Framer from "./views/framer/framer.jsx";
import Home from "./views/home/home.jsx";
import Credits from "./views/credits/credits.jsx"
import Faq from "./views/faq/faq.jsx"

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router>
      {/** Stuff that uses the header + loadingscreen */}
      <Route path="/" component={App}>
        <Route path="/" component={Home}></Route>
        <Route path="/credits/" component={Credits}></Route>
        <Route path="/faq/" component={Faq}></Route>
      </Route>

      <Route path="/routeErr" component={routeError} />
      <Route path="/route/" component={Framer} />
    </Router>
  ),
  root,
);

async function initWisp(server, transport) {
  const connection = new BareMux.BareMuxConnection("/baremux/worker.js");
  await connection.setTransport(transport, [{ wisp: server }]);
}

// UV serviceworker (And nohost and scramjet soon maybe no promises)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      initWisp("wss://wisp.mercurywork.shop/", "/epoxy/index.mjs");
    } catch {
      console.error("Could not connect to wisp " + err);
    }
    try {
      const reg = await navigator.serviceWorker.register("/stl.sw.js"); // stl.sw.js is the main SW
      console.log("SW Registered");
    } catch (err) {
      console.log("Could not register sw", err);
    }
  });
}

if (!localStorage.getItem("stlconfig")) {
  localStorage.setItem(
    "stlconfig",
    JSON.stringify({
      router: "UV",
      transport: "epoxy",
      engine: "https://www.startpage.com/sp/search?q=",
      snowflake: "no", // if its on, users will run a tor snowflake node in the background
    }),
  );
}
