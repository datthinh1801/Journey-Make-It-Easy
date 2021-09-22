const path = require('path');

// : https://betterprogramming.pub/vue-django-using-vue-files-and-the-vue-cli-d6dd8c9145eb
module.exports = {
    publicPath: '/',
    outputDir: path.resolve(__dirname, '../static/'),
    filenameHashing: false,
    runtimeCompiler: true,
    devServer: {
        writeToDisk: true
    }
}