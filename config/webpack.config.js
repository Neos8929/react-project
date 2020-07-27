const utils = require('./utils');
const jsRules = require('./rules/js-rule');
const styleRules = require('./rules/style-rule');
const plugins = require('./plugins');

/*
 * @type {import('webpack').Configuration}
 */

module.exports = {
    entry: {
        app: utils.resolve('src/index.tsx')
    },
    output: {
        path: utils.resolve('dist'),
        filename: '[name].js'
    },
    plugins: [...plugins],
    module: {
        rules: [...jsRules, ...styleRules]
    }
}