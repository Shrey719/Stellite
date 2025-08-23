function openProxied(url) {
  let config = JSON.parse(localStorage.getItem("stlconfig"));

  if (config.router == "UV") {
    open(
      "/route/#" +
        encodeURIComponent(__uv$config.prefix + __uv$config.encodeUrl(url)),
    );
  } else {
    // TODO - scramjet support
  }
}

export { openProxied };
