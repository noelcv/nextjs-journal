


const config {};

module.exports = withMyPlugin('args', config)


// module.exports = (phase, {defaultConfig}) => {
//   if (phase === PHASE_PRODUCTION_BUILD) {
//     console.log("we're in PROD mode")
//     return defaultConfig;
//   }
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("we're in DEV mode");
//     return defaultConfig;
//   }
// }