require('should');

import HopAddition from '../src';

describe('Module functionality', function() {
  it('Should export the expected type', () => {
    HopAddition.should.be.instanceOf(Function);
  });
});
