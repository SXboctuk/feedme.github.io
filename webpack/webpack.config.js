const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars) => {
    const { env, ASSET_PATH } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig(ASSET_PATH), envConfig)
    return config
}
