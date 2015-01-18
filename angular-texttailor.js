
'use strict'

angular.module('angular-texttailor', [])
  .directive('texttailor', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
        texttailor: '@',
        ttResizable: '=',
        ttEllipsis: '=',
        ttCenter: '='
      },
      link: function(scope, element, attr) {
        var container = element,
            options = {
                resizable: attr.resizable || true,
                ellipsis: attr.ellipsis || false,
                center: attr.center || false,
            };
        $timeout(function() {
            $(container).textTailor(options);
        });

        // scope.$watch('texttailor', function () {
        //   $(container).texttailor(options);
        // });
      }
    };
  });