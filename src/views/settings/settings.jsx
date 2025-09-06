import styles from "../../App.module.css";
import ProxySettings from "./categories/proxy";
import Sidebar from "./sidebar.jsx";
import settings from "./settings.module.css"

function Settings() {
  return (
    <div class={styles.body}>
      <Sidebar />
      <div id="settingsContent" class={settings.content}>
        <ProxySettings />
      </div>
    </div>
  );
}

export default Settings;
