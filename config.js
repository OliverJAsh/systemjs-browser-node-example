System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "npm:query-string": "npm:query-string@^1.0.0",
    "query-string": "npm:query-string@^1.0.0",
    "github:jspm/nodelibs@0.0.5": {
      "Base64": "npm:Base64@^0.2.0",
      "base64-js": "npm:base64-js@^0.0.4",
      "ieee754": "npm:ieee754@^1.1.1",
      "ripemd160": "npm:ripemd160@^0.2.0",
      "pbkdf2-compat": "npm:pbkdf2-compat@^2.0.1",
      "inherits": "npm:inherits@^2.0.1",
      "sha.js": "npm:sha.js@^2.2.6",
      "json": "github:systemjs/plugin-json@^0.1.0"
    },
    "npm:Base64@0.2.1": {},
    "npm:base64-js@0.0.4": {},
    "npm:ieee754@1.1.4": {},
    "npm:inherits@2.0.1": {},
    "npm:pbkdf2-compat@2.0.1": {},
    "npm:query-string@1.0.0": {},
    "npm:ripemd160@0.2.0": {},
    "npm:sha.js@2.2.7": {}
  }
});

System.config({
  "versions": {
    "github:jspm/nodelibs": "0.0.5",
    "github:systemjs/plugin-json": "0.1.0",
    "npm:Base64": "0.2.1",
    "npm:base64-js": "0.0.4",
    "npm:ieee754": "1.1.4",
    "npm:inherits": "2.0.1",
    "npm:pbkdf2-compat": "2.0.1",
    "npm:query-string": "1.0.0",
    "npm:ripemd160": "0.2.0",
    "npm:sha.js": "2.2.7"
  }
});

