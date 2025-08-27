import settings from "../settings.module.css";


function Styling() {
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

export default Styling;
