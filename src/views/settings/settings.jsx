import styles from "../../App.module.css";
import settings from "./settings.module.css";
import { onMount } from "solid-js";
function Settings() {
  onMount(() => {
    const rewriterSelect = document.getElementById("rewriteSelect");
    rewriterSelect.value = JSON.parse(localStorage.getItem("stlconfig")).router;

    const engineSelect = document.getElementById("engineSelect");
    engineSelect.value = JSON.parse(localStorage.getItem("stlconfig")).engine;

    const snowflakeSelect = document.getElementById("snowflakeSelect");
    snowflakeSelect.value = JSON.parse(
      localStorage.getItem("stlconfig"),
    ).snowflake;
  });

  function setRewriter(event) {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    config.router = event.target.value;
    localStorage.setItem("stlconfig", JSON.stringify(config));
  }
  function setEngine(event) {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    config.engine = event.target.value;
    localStorage.setItem("stlconfig", JSON.stringify(config));
  }
  function setSnowflake(event) {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    config.snowflake = event.target.value;
    localStorage.setItem("stlconfig", JSON.stringify(config));
  }
  return (
    <div class={styles.body}>
      <div class={settings.settingsElm}>
        <h1>Rewriter</h1>
        <p>Choose the rewriter that works best for the site you want to use</p><br/>
        <select id="rewriteSelect" onChange={setRewriter}>
          <option value="UV">Ultraviolet</option>
          <option value="scram">Scramjet (soon) </option>
        </select>
      </div>
      <div class={settings.settingsElm}>
        <h1>Search engine</h1>
        <p>Choose the search engine that feels the best for you</p><br/>
        <select id="engineSelect" onChange={setEngine}>
          <option value="https://www.startpage.com/sp/search?q=">
            Startpage
          </option>
          <option value="https://duckduckgo.com/?q=">DuckDuckGo</option>
          <option value="https://www.mojeek.com/search?q=">Mojeek</option>
        </select>
      </div>

      <div class={settings.settingsElm}>
        <h1>Snowflake</h1>
        <p>Run a snowflake node on my computer?</p>
        <span class={settings.info}>
          This helps people in regions like Iran and Russia, and China get
          uncensored access to the internet
        </span>

        <select id="snowflakeSelect" onChange={setSnowflake}>
          <option value="yes">Yes, run a snowflake node on my computer</option>
          <option value="no">Do not run a snowflake node on my computer</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
