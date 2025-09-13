import styles from "./mainBody.module.css";
import gear from "../../assets/gear.svg";
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

      <div class={styles.settings}>
        <A href="/settings/">
          <img src={gear}></img>
        </A>
      </div>
    </>
  );
}

export default Header;
