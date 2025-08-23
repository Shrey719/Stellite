self.__uv$config = {
  prefix: "/u3/route/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/violet/uv.handler.js",
  client: "/violet/uv.client.js",
  bundle: "/violet/uv.bundle.js",
  config: "/violet/uv.config.js",
  sw: "/violet/uv.sw.js",
};
