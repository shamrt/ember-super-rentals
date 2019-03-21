module.exports = function() {
  return {
    clientAllowedKeys: ["LEAFLET_MAPS_API_KEY"],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: true
  };
};
