import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  proxy: {
    '/blog_api': {
      target: 'http://101.42.250.40',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
})
