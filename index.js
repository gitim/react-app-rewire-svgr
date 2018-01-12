const { getBabelLoader } = require(`react-app-rewired`)

function rewireSVGR(config) {
  const babelLoader = getBabelLoader(config.module.rules)
  const svgReactLoader = {
    test: /\.svg$/,
    use : [
      {
        loader : babelLoader.loader,
        options: babelLoader.options,
      },
      { loader: require.resolve(`svgr/webpack`) },
    ],
  }

  config.module.rules.unshift(svgReactLoader)

  return config
}

module.exports = rewireSVGR
