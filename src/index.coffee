moduleName = 'rs-scroll-top'
angular = window.angular or require 'angular'
angular.module moduleName, []
.run ($transitions) ->
  $transitions.onFinish {}, (trans) ->
    document.body.scrollTop = 0
module.exports = moduleName