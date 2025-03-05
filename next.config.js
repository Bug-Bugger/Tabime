
module.exports = {
    reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/map',
        destination: '/components/Pages/MapPage/Map',
      },
    ]
  },
}