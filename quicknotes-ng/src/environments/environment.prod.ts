declare var require: any;
const packageJson = require("../../package.json");

export const environment = {
  production: true,
  version: packageJson.version
};
