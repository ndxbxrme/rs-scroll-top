(function() {
  var angular, moduleName;

  moduleName = 'rs-scroll-top';

  angular = window.angular || require('angular');

  angular.module(moduleName, []).run(function($transitions) {
    return $transitions.onFinish({}, function(trans) {
      return document.body.scrollTop = 0;
    });
  });

  module.exports = moduleName;

}).call(this);

//# sourceMappingURL=index.js.map
