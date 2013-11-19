(function() {
  angular.module('floatingLabel', [])
    .directive('floatingLabel', ['$parse', function($parse) {
      return {
        restrict: 'EA',
        scope: {
          options: '&floatingLabel'
        },
        link: function(scope, el, args) {
          var options = scope.options();
          console.log(el);
          el.floatingLabel(options);
        }
      };
    }]);
}());