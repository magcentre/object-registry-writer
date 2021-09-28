const { resolve } = require('path');

const { importTest, runTests } = require('@magmods/test-helper');

const { getTestHelperConf } = require('./src/common');

const testHelperConfig = getTestHelperConf();

const objectRegistryAPIsTest = resolve('./test/src/objectRegistryAPIs');


const tests = () => {
  // eslint-disable-next-line func-names
  describe('RUNNING API TEST', function () {
    this.timeout(5000);
    importTest('Object Registry Reader API Tests', objectRegistryAPIsTest);
  });
};
runTests(testHelperConfig, tests);
