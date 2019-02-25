const autoprefixer = require("autoprefixer");

module.exports = () => ({
    plugins: [
        autoprefixer({
            grid: true, browsers: ['>1%']
        })
    ]
});