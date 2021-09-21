const path = require('path');

// : https://betterprogramming.pub/vue-django-using-vue-files-and-the-vue-cli-d6dd8c9145eb
module.exports = {
    // publicPath: '/static/src/vue/dist/',
    publicPath: '/',
    outputDir: path.resolve(__dirname, '../static/src/vue/dist/'),
    filenameHashing: false,
    runtimeCompiler: true,
    devServer: {
        writeToDisk: true
    }
}