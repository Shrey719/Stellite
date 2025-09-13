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
    const rewriterSelect = document.getElementById("memMon");
    rewriterSelect.value = JSON.parse(
      localStorage.getItem("stlconfig"),
    ).memoryMonitoring;
  });

  function setMemMonitor() {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    if (!config.memoryMonitoring) {
      document.getElementById("memMon").innerText = "Disable"
    } else {
      document.getElementById("memMon").innerText = "Enable"
    }
    config.memoryMonitoring = !config.memoryMonitoring;
    localStorage.setItem("stlconfig", JSON.stringify(config));
  }
  return (
    <div>
      <h1 class={settings.desc}>Miscellaneous Settings</h1>
      <div class={settings.settingsElm}>
        <h1>Memory monitoring</h1>
        <p>Monitor the amount of memory used by a tab in stellite</p>
        <button id="memMon" onClick={setMemMonitor}>
          Enable
        </button>
      </div>

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
