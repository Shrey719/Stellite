import settings from "../settings.module.css";

import { onMount } from "solid-js";

function Filesystem() {
  onMount(() => {
    const rewriterSelect = document.getElementById("fsSelect");
    rewriterSelect.value = JSON.parse(localStorage.getItem("stlconfig")).fsEnabled;
  });

  function setFs(event) {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    config.fsEnabled = event.target.value;
    localStorage.setItem("stlconfig", JSON.stringify(config));
  }

  return (
    <div>
      <h1 class={settings.desc}>Filesystem (coming soon)</h1>
      <div class={settings.settingsElm}>
        <h1>Filesystem Enabled</h1>
        <p>Enabling the filesystem may reduce website stability. It also redirects all downloads to a virtual filesystem, isolated from your computer's main storage.</p>
        <select id="fsSelect" onChange={setFs}>
          <option value="no">Do not enable the filesystem</option>
        </select>
      </div>
    </div>
  );
}

export default Filesystem;