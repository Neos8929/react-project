const path = require("path");

module.exports = {
    resolve: function(dir) {
        return path.join(__dirname, "../", dir);
    },
    assetsPath: function(_path) {
        const assetsSubDirectory = "../static"
        return path.posix.join(assetsSubDirectory, _path);
    },
    srcPath: function(_path) {
        const srcDirectory = "../src";
        return path.posix.join(srcDirectory, _path);
    }
}