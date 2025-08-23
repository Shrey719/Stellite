import styles from "./mainBody.module.css";
import gear from "../../assets/gear.svg";
import dots from "../../assets/dots.svg";

import { A } from "@solidjs/router";

function Header() {
  return (
    <>
      <div class={styles.versionLogo}>
        <A href="/">Stellite v1.0.0</A>
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
