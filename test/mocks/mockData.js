const getMockData = (mockData) => (mockData);

const getProfile = (profileData) => (profileData);

const getMockProfile = (userId, type) => {
  return getProfile(userId);
};


module.exports = {
  getMockProfile,
  getMockData,
};
