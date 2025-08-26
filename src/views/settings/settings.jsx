import styles from "../../App.module.css";
import ProxySettings from "./categories/proxy";
import Sidebar from "./sidebar.jsx";

function Settings() {
  return (
    <div class={styles.body}>
      <Sidebar />
      <div id="settingsContent">
        <ProxySettings />
      </div>
    </div>
  );
}

export default Settings;
