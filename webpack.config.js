module.exports = {
  entry: './src/index.jsx',
  output: { 
    path: './public', 
    filename: 'bundle.js' 
  },
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
};