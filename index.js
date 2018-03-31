const { getBabelLoader } = require(`react-app-rewired`)

function rewireSVGR(config, env, svgrLoaderOptions) {
  const babelLoader = getBabelLoader(config.module.rules)
  const svgReactLoader = {
    test: /\.svg$/,
    use : [
      {
        loader : babelLoader.loader,
        options: babelLoader.options,
      },
      { 
        loader: require.resolve(`svgr/webpack`),
        options: svgrLoaderOptions
      },
    ],
  }

  config.module.rules.unshift(svgReactLoader)

  return config
}

module.exports = rewireSVGR
