// frontend/craco.config.js
console.log('Craco config loaded');

module.exports = {
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    return {
      ...devServerConfig,
      port: 5000,
      allowedHosts: ['localhost', '127.0.0.1'],
    };
  },
};
