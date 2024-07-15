/** @typedef {import('@web/dev-server').DevServerConfig} DevServerConfig */
export default /** @type {DevServerConfig} */ {
  preserveSymlinks: false,
  open: '/index.html',
  basePath: '/banking',
  appIndex: 'index.html',
  nodeResolve: {
    moduleDirectories: ['node_modules'],
  },
};
