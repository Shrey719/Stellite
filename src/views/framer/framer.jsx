import { createSignal, onMount, onCleanup } from "solid-js";
import framer from "./framer.module.css";

function Framer() {
  const [barLocation, setBarLocation] = createSignal("");

  onMount(() => {
    const iframe = document.getElementById("mainframe");

    const updateOmniinput = () => {
      const href = iframe.contentWindow.location.href;
      const finalSrc = __uv$config.decodeUrl(
        href.slice(window.location.origin.length + __uv$config.prefix.length),
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
        <input class={framer.searchBar} value={barLocation()} />
      </div>
      <iframe
        src={decodeURIComponent(window.location.hash.slice(1))}
        class={framer.mainframe}
        id="mainframe"
        onLoad={(e) => {
          const eSrc = e.target.src;
          const finalSrc = __uv$config.decodeUrl(
            eSrc.slice(
              window.location.origin.length + __uv$config.prefix.length,
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
