const path = require('path')

module.exports = {
  stories: ['./stories/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src'),
      storybook: path.resolve(__dirname, '../storybook')
    }
    return config
  }
}
