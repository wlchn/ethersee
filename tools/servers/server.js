import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';

var config = require("../../webpack.config.js");
config.entry.src.unshift("webpack-dev-server/client?http://localhost:9000", "webpack/hot/only-dev-server");
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
config.devtool = 'source-map'

const server = new WebpackDevServer(webpack(config), {
  contentBase: path.resolve("src"),
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true,
});

const port = 9000;
server.listen(port, "0.0.0.0", function(err, result) {
  if(err) {
    console.log(err)
  }

  console.log('Webpack dev server running at localhost:' + port);
});