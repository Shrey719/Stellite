function openProxied(url) {
  let config = JSON.parse(localStorage.getItem("stlconfig"));

  if (config.router == "UV") {
    open(
      "/route/#" +
        encodeURIComponent(__uv$config.prefix + __uv$config.encodeUrl(url)),
    );
  } else if (config.router == "scram") {
  }
}

const globalProxy = {
  encodeUrl: function(str) {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    if (config.router == "UV") {
      return __uv$config.encodeUrl(str)
    }
  },
  decodeUrl: function(str) {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    if (config.router == "UV") {
      return __uv$config.decodeUrl(str)
    }
  },
  get prefix() {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    if (config.router == "UV") {
      return __uv$config.prefix
    }
  },
  open: function(str) {
    let config = JSON.parse(localStorage.getItem("stlconfig"))
    if (config.router == "UV") {
      open("/route/#" + encodeURIComponent(__uv$config.prefix + __uv$config.encodeUrl(str) ))
    }
  },
  set href(loc) {
    let config = JSON.parse(localStorage.getItem("stlconfig"));
    if (config.router == "UV") {
      location.href = __uv$config.prefix + __uv$config.encodeUrl(loc)
    }
  }
}

export { openProxied, globalProxy };
