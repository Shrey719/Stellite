import settings from "../settings.module.css";

import { onMount } from "solid-js";

function Filesystem() {
  onMount(() => {
    const rewriterSelect = document.getElementById("fsSelect");
    rewriterSelect.value = JSON.parse(
      localStorage.getItem("stlconfig"),
    ).fsEnabled;
  });

  function setFs(event) {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    config.fsEnabled = event.target.value;
    localStorage.setItem("stlconfig", JSON.stringify(config));
  }

  return (
    <div>
      <h1 class={settings.desc}>Theme (coming soon)</h1>
      <div class={settings.settingsElm}>
        <h1>Standard</h1>
        <p>The standard theme that comes with Stellite</p>
        <button>Enable</button>
      </div>
    </div>
  );
}

export default Filesystem;
