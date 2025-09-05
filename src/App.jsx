import styles from "./App.module.css";
import Loading from "./views/mainBody/loading.jsx";
import Header from "./views/mainBody/header.jsx";
import Snowflake from "./views/mainBody/snowflake.jsx"; // support for opt-in snowflake nodes
// has the loading screen + header
// everything else is up to how you use it
// in JSX :
/**
 * <App>
 *    <Somecomponent />
 * </App>
 */
// for how it works in the router, look at index.jsx

function App(props) {
  return (
    <div>
      <div class={styles.headerWrapper}>
        <div class={styles.header}>
          <Header />
        </div>
      </div>
      <div class={styles.body}>
        <Loading />
        <Snowflake />
        {props.children}
      </div>
    </div>
  );
}

export default App;
