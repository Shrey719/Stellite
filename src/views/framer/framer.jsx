function Framer() {
  return (
    <>
      <iframe
        src={decodeURIComponent(window.location.hash.slice(1))}
        style="margin: 0; border: none; position: absolute; top:0; left:0; width: 100%; height: 100%;"
      ></iframe>
    </>
  );
}

export default Framer;
