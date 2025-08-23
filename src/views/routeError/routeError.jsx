import { createSignal, onMount } from "solid-js";

function routeError() {
  const [error, setError] = createSignal();
  const [url, setUrl] = createSignal();
  onMount(() => {
    const params = new URLSearchParams(location.search);
    setError(params.get("err"));
    setUrl(params.get("url"));
  });

  return (
    <div>
      <span>Error in fetching {url}</span>
      <br />
      <span>{error}</span>
    </div>
  );
}

export default routeError;
