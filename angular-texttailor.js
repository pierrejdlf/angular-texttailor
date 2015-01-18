
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
                resizable: attr.ttResizable || true,
                ellipsis: attr.ttEllipsis || false,
                center: attr.ttCenter || false,
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