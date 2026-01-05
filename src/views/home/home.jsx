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
    <>
    <div id="ads">
<div style="position: absolute; z-index: 99999">
      <input autocomplete="off" type="checkbox" id="aadsstickymk0g43gy" hidden />
      <div style="padding-top: 0; padding-bottom: 0;">
        <div style="width:120px;height:60px;position:fixed;text-align:center;font-size:0;top:50%;transform:translateY(-50%);right:0">
          <label for="aadsstickymk0g43gy" class={styles.hideAd} style="top: -24px; left: 0;; position: absolute;border-radius: 4px; background: rgba(248, 248, 249, 0.70); padding: 4px;z-index: 99999;cursor:pointer">
            <svg fill="#000000" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
              <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/>
            </svg>
          </label>
          <div id="frame" style="width: 120px;margin: auto;z-index: 99998;height: auto display: flex;flex-direction: column; justify-content: center">
                        <iframe data-aa="2423216" src="//ad.a-ads.com/2423216/?size=120x60" style='border:0; padding:0; width:120px; height:60px; overflow:hidden; margin: 0 auto'></iframe>
                    </div>
        </div>
    </div></div>
    </div>
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
    </>
  );
}

export default Home;
