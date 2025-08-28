import { createSignal, onMount, onCleanup } from "solid-js";
import framer from "./framer.module.css";
import { globalProxy } from "../../lib/proxy.js";

function Framer() {
  const [barLocation, setBarLocation] = createSignal("");
  let httpslessdomain = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/.*)?$/;

  onMount(() => {
    const iframe = document.getElementById("mainframe");

    const updateOmniinput = () => {
      const href = iframe.contentWindow.location.href;
      const finalSrc = globalProxy.decodeUrl(
        href.slice(window.location.origin.length + globalProxy.prefix.length),
      );
      console.log(finalSrc);
      setBarLocation(finalSrc);
    };

    const attachWatchers = () => {
      const win = iframe.contentWindow;

      updateOmniinput();

      win.addEventListener("popstate", updateOmniinput);
      win.addEventListener("hashchange", updateOmniinput);

      ["pushState", "replaceState"].forEach((method) => {
        const orig = win.history[method];
        win.history[method] = function (...args) {
          const result = orig.apply(this, args);
          updateOmniinput();
          return result;
        };
      });
    };

    iframe.addEventListener("load", attachWatchers);

    onCleanup(() => {
      iframe.removeEventListener("load", attachWatchers);
    });
  });

  return (
    <>
      <div class={framer.omnibar} id="omnibar">
        <input
          class={framer.searchBar}
          value={barLocation()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (httpslessdomain.test(e.currentTarget.value)) {
                document.getElementById("mainframe").src = globalProxy.prefix + globalProxy.encodeUrl("https://" + e.currentTarget.value)
              } else if (
                e.currentTarget.value.startsWith("https://") ||
                e.target.value.startsWith("http://")
              ) {
                document.getElementById("mainframe").src = globalProxy.prefix + globalProxy.encodeUrl(e.currentTarget.value)
              } else {
                let config = JSON.parse(localStorage.getItem("stlconfig"));
                let builturl = config.engine + e.currentTarget.value;
                document.getElementById("mainframe").src = globalProxy.prefix + globalProxy.encodeUrl(builturl)
              }
            }
          }}
        />
      </div>
      <iframe
        src={decodeURIComponent(window.location.hash.slice(1))}
        class={framer.mainframe}
        id="mainframe"
        onLoad={(e) => {
          const eSrc = e.target.src;
          const finalSrc = globalProxy.decodeUrl(
            eSrc.slice(
              window.location.origin.length + globalProxy.prefix.length,
            ),
          );
          console.log(finalSrc);
          setBarLocation(finalSrc);
        }}
      ></iframe>
    </>
  );
}

export default Framer;
