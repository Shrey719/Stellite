import settings from "../settings.module.css";

import { onMount } from "solid-js";

function unregServiceworkers() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        for (let registration of registrations) {
          registration.unregister();
        }
      })
      .catch((err) =>
        console.error("Error fetching service worker registrations:", err),
      );
  }
}

function Misc() {
  onMount(() => {
  });

  return (
    <div>
      <h1 class={settings.desc}>Miscellaneous<hr/></h1>
      <div class={settings.settingsElm}>
        <h1>Reset Website</h1>
        <p>
          Reset your instance of Stellite if you are having any trouble with
          configurations or websites
        </p>
        <button
          onClick={() => {
            unregServiceworkers();
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Misc;
