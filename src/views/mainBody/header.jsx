import styles from "./mainBody.module.css";
import gear from "../../assets/gear.svg";
import controller from "../../assets/control.svg"
import ObfuscText from "../../lib/obfuscatedText";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

function Header() {
  return (
    <>
      <div class={styles.versionLogo}>
        <A href="/">
          <ObfuscText>Stellite v1.0.0</ObfuscText>
        </A>
      </div>

      <div class={styles.allother}>
        <A href = "/g/">
          <ObfuscText>Games</ObfuscText>
        </A>
        <A href="/a/">
          <ObfuscText>Applications</ObfuscText>
        </A>
      </div>  
      <div class={styles.settings}>
        <A href="/settings/">
          <img src={gear}></img>
        </A>
      </div>
    </>
  );
}

export default Header;
