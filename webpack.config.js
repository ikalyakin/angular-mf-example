const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "mfapp",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfapp",
      library: {type: 'var', name: 'mfapp'},
      filename: 'remoteEntry.js',
      exposes: {
        './Bootstrap': './src/bootstrap.ts'
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: false },
        "@angular/common": { singleton: true, strictVersion: false },
        "@angular/router": { singleton: true, strictVersion: false },
      },
    }),
  ],
};
