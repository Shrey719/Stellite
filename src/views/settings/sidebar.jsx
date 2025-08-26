import { render } from "solid-js/web";
import styles from "./sidebar.module.css";
import ProxySettings from "./categories/proxy.jsx";
import Filesystem from "./categories/filesystem.jsx";
import Misc from "./categories/misc.jsx"
function Sidebar() {

  return (
    <div class={styles.sidebar}>
      <div class={styles.selector}>
        <span
          onClick={() => {
            const container = document.getElementById("settingsContent");
            if (container) {
              container.innerHTML = "";
              render(() => <ProxySettings />, container);
            }
          }}
        >
          Proxy
        </span>
      </div>
      <div class={styles.selector}>
        <span 
          onClick={() => {
            const container = document.getElementById("settingsContent");
            if (container) {
              container.innerHTML = "";
              render(() => <Filesystem />, container);
            }
          }}
        >Filesystem</span>
      </div>
      <div class={styles.selector}>
        <span
          onClick={() => {
            const container = document.getElementById("settingsContent");
            if (container) {
              container.innerHTML = "";
              render(() => <Misc />, container);
            }
          }}
        >Miscellaneous</span>
      </div>
    </div>
  );
}

export default Sidebar;
