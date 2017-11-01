const path = require('path');
module.exports = {
    //define entry point
    entry: path.resolve(__dirname, 'src') + '/index.js',

    //define output point
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.scss$/,
                loader:['style-loader','css-loader','sass-loader',]
            }
        ]
    }
};