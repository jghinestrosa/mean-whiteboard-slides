'use strict';

describe('Directive: resizableReferent', function () {

  // load the directive's module
  beforeEach(module('slidesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<resizable-referent></resizable-referent>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the resizableReferent directive');
  }));
});
