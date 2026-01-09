import GamesList from "./games.json"
import { For } from "solid-js";
import { globalProxy } from "../../lib/proxy.js";
import ObfuscText from "../../lib/obfuscatedText";
import styles from "./games.module.css"
function GameCategory(props) {
    let Category = props.Category;
    let title = Category.category;
    return (
    <div class={styles.all}>
        <h1 class={styles.categorytitle}>{title}</h1>
        <div class={styles.gamesParent}>
            {Category.games.map((game) => (
            <div class={styles.game} on:click={() => {globalProxy.open(game.link)}}>
                <img src={game.img}></img>
                <ObfuscText>
                {game.name}
                </ObfuscText>
            </div>
            ))}
        </div>

    </div>
  );
}

function Games() {

    return (
    <div class={styles.page}>
        <For each={GamesList}>
            {(category) => (
                <GameCategory Category={category}/>
            )}
        </For>
        <br/><br/><br/><br/><br/><br/><br/>
    </div>
    )
}

export default Games