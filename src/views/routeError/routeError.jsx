import { createSignal, onMount } from "solid-js";
import styles from "./routerror.module.css"
function routeError() {
  const [error, setError] = createSignal();
  const [url, setUrl] = createSignal();
  onMount(() => {
    const params = new URLSearchParams(location.search);
    setError(params.get("err"));
    setUrl(params.get("url"));
  });

  return (
    <div class={styles.body}>
      <h1>Error</h1>
      
      <span>Failed to load {url}</span><br/>
      <button onClick={() => {location.reload()}}>Reload</button>
      <br />
      <span>{error}</span>
    </div>
  );
}

export default routeError;
