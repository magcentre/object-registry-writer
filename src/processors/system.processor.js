const si = require('systeminformation');

const getSystemInfo = () => {
  return si.cpu();
};

module.exports = {
  getSystemInfo,
};
