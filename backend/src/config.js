/**
 * JWT config.
 */
module.exports = {
  config: {
    algorithms: ["HS256"],
    secret: "shhhh", // TODO Put in process.env
  },
};
