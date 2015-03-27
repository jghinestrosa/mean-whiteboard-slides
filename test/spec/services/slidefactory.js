'use strict';

describe('Service: slideFactory', function () {

  // load the service's module
  beforeEach(module('slidesApp'));

  // instantiate service
  var slideFactory;
  beforeEach(inject(function (_slideFactory_) {
    slideFactory = _slideFactory_;
  }));

  it('should do something', function () {
    expect(!!slideFactory).toBe(true);
  });

});
