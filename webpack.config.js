const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.jsx',
    vendor: [ 
      'react', 
      'react-dom',
      'react-router',
      'react-tap-event-plugin',
      'material-ui',      
      'moment',
      'sort-by',
    ],
  },
  output: { 
    path: './public', 
    filename: 'bundle.js' 
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',      
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  },
  devServer: {
    quiet: false,
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  },  
};