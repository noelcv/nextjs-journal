//lookup for and enable environment variables
const nextEnv = require('next-env')
const dotEnvLoad = require('dotenv-load')

dotEnvLoad()

const withEnv = nextEnv()
/**
 * in the background, this plugin is loading all the environment variables:
 * {
 * env: {
 *    HELP_APP_URL=https://frontendmasters.com
 *}
 * }
 */

module.exports = withEnv()


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