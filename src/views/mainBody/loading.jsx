import styles from "./mainBody.module.css";

function Loading() {
  // if the body is already rendered just skip the loading screen
  // Probably shouldnt happen but you can never be too careful
  if (typeof document !== "undefined" && document.getElementById("mainBody")) {
    return;
  }

  return (
    // lil spinning circle
    <div class={styles.loadingBackground} id="loadingScreen"></div>
  );
}

export default Loading;
