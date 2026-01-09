import appsList from "./apps.json"
import { For } from "solid-js";
import { globalProxy } from "../../lib/proxy.js";
import styles from "./apps.module.css"
import ObfuscText from "../../lib/obfuscatedText";

function AppCategory(props) {
    let Category = props.Category;
    let title = Category.category;
    return (
    <div class={styles.all}>
        <h1 class={styles.categorytitle}>{title}</h1>
        <div class={styles.appsParent}>
            {Category.apps.map((app) => (
            <div class={styles.app} on:click={() => {globalProxy.open(app.link)}}>
                <img src={app.img}></img>
                <ObfuscText>
                {app.name}
                </ObfuscText>
            </div>
            ))}
        </div>

    </div>
  );
}

function Apps() {

    return (
    <div class={styles.page}>
        <For each={appsList}>
            {(category) => (
                <AppCategory Category={category}/>
            )}
        </For>
        <br/><br/><br/><br/><br/><br/><br/>
    </div>
    )
}

export default Apps