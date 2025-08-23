import { onMount } from "solid-js";
import styles from "./home.module.css";
import { openProxied } from "../../lib/proxy.js";

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
          <h1>STELLITE</h1>
          <input
            placeholder="Type a URL here or enter a search query"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (httpslessdomain.test(e.currentTarget.value)) {
                  openProxied("https://" + e.currentTarget.value);
                } else if (
                  e.currentTarget.value.startsWith("https://") ||
                  e.target.value.startsWith("http://")
                ) {
                  openProxied(e.currentTarget.value);
                } else {
                  let config = JSON.parse(localStorage.getItem("stlconfig"));
                  let builturl = config.engine + e.currentTarget.value;
                  openProxied(builturl);
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
