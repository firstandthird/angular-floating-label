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
          el.floatingLabel(options);

          var label = $('label[for="' + el.attr('id') + '"]');

          args.$observe('placeholder', function(value) {
            label.text(value);
          });

        }
      };
    }]);
}());