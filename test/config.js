module.exports.models = {
  connection: 'test',
  migrate   : 'drop'
};

module.exports.log = {
  level: 'error'
};

module.exports.connections = {
  test: {
    adapter : 'sails-disk'
  }
};

module.exports.hooks = {
  grunt: false,
  i18n : false,
  views: false
};
