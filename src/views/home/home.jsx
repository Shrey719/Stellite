import { onMount } from "solid-js";
import styles from "./home.module.css";
import { globalProxy } from "../../lib/proxy.js";
import ObfuscText from "../../lib/obfuscatedText";
function Home() {
  // anyways this is super hacky and you shouldnt do it
  onMount(() => {
    document.getElementById("loadingScreen")?.remove();
  });

  /* example.com -> match
     google.com -> match
     wikipedia.org -> match
     wikipedia.org/hihi/ -> match

     https://example.com -> no match
     hi -> no match
  */
  let httpslessdomain = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/.*)?$/;

  return (
    <div id="mainBody">
      <div class={styles.glassContainer}>
        <div class={styles.body}>
          <ObfuscText as="h1">STELLITE</ObfuscText>
          <input
            placeholder="Type a URL here or enter a search query"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (httpslessdomain.test(e.currentTarget.value)) {
                  globalProxy.open("https://" + e.currentTarget.value);
                } else if (
                  e.currentTarget.value.startsWith("https://") ||
                  e.target.value.startsWith("http://")
                ) {
                  globalProxy.open(e.currentTarget.value);
                } else {
                  let config = JSON.parse(localStorage.getItem("stlconfig"));
                  let builturl = config.engine + e.currentTarget.value;
                  globalProxy.open(builturl);
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
