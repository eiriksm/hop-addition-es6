'use strict';
require('should');

import HopAddition from '../src';

import Hop from 'hops-es6';
const testHop = new Hop('centennial');

describe('Module functionality', function() {
  it('Should export the expected type', () => {
    HopAddition.should.be.instanceOf(Function);
  });
});
