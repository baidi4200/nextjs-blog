const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "baidi420",
        mongodb_password: "08LKdw4XCiRrEPHA",
        mongodb_clustername: "cluster0",
        mongodb_database: "nextjs",
      },
    };
  }

  return {
    env: {
      mongodb_username: "maximilian",
      mongodb_password: "2YkcXq43KyPk0vqp",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
