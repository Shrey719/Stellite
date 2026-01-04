import framer from "./framer.module.css";
import { globalProxy } from "../../lib/proxy.js";

function Framer() {
  return (
    <>
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
        }}
      ></iframe>
    </>
  );
}

export default Framer;
