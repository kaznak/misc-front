module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    /**
     * CSS handling, specifically overriding postcss loader
     */
    // Find the only Storybook webpack rule that tests for css
    const cssRule = config.module.rules.find((rule) =>
      'test.css'.match(rule.test)
    )
    // Which loader in this rule mentions the custom Storybook postcss-loader?
    const loaderIndex = cssRule.use.findIndex((loader) => {
      // Loaders can be strings or objects
      const loaderString = typeof loader === 'string' ? loader : loader.loader
      // Find the first mention of "postcss-loader", it may be in a string like:
      // "@storybook/core/node_modules/postcss-loader"
      return loaderString.includes('postcss-loader')
    })
    // Simple loader string form, removes the obsolete "options" key
    cssRule.use[loaderIndex] = 'postcss-loader'

    // Uncomment the following to debug
    // console.dir(config, { depth: null })
    return config
  },
}
