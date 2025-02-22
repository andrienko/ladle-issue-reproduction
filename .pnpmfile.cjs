module.exports = {
  hooks: {
    readPackage(pkg) {
      // Suppressing react-inspector react peerDependency check
      if (pkg.name === 'react-inspector') {
        pkg.peerDependencies['react'] = '*';
      }
      return pkg;
    },
  },
};
