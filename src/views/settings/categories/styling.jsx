import settings from "../settings.module.css";
import ObfuscText from "../../../lib/obfuscatedText.jsx";

function Styling() {
  return (
    <div>
      <h1 class={settings.desc}>Theme</h1>
      <div class={settings.settingsElm}>
        <h1>Standard</h1>
        <ObfuscText as="p">
          The standard theme that comes with stellite
        </ObfuscText>
        <button>Enabled</button>
      </div>
    </div>
  );
}

export default Styling;
