import styles from "./mainBody.module.css";
import gear from "../../assets/gear.svg";
import dots from "../../assets/dots.svg";
import ObfuscText from "../../lib/obfuscatedText";
import { A } from "@solidjs/router";

function Header() {
  return (
    <>
      <div class={styles.versionLogo}>
        <A href="/"><ObfuscText>Stellite v1.0.0</ObfuscText></A>
      </div>

      <div class={styles.settings}>
        <A href="/settings/">
          Settings
          <img src={gear}></img>
        </A>
      </div>

      <div class={styles.more}>
        <A href="/more/">
          More
          <img src={dots}></img>
        </A>
      </div>
    </>
  );
}

export default Header;
