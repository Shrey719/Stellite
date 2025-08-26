function Snowflake() {
  if (!localStorage.getItem("stlconfig")) {
    return null;
  }
  if (JSON.parse(localStorage.getItem("stlconfig")).snowflake == "yes") {
    return (
      <iframe
        src="https://embed-snowflake.torproject.org/"
        id="hi"
        style="    
    position: fixed;
    right: 0;
    bottom: 0;
    width: 330px;
    height: 230px;
    border: none;
    z-index: 9999;
    pointer-events: auto;

    "
        width="20%"
        height="20%"
      ></iframe>
    );
  } else {
    return null;
  }
}
export default Snowflake;
