angular.module('trainingapp.directives')
.directive('mainMenu', ['$location', function($location) {
  return function(scope, element, attrs) {
    var links = element.find('a'),
    link,
    currentLink,
    urlMap = {},
    i;

    for (i = 0; i < links.length; i++) {
      link = angular.element(links[i]);
      urlMap[link.attr('href')] = link;
    }

    scope.$on('$routeChangeStart', function() {
      var path = $location.path();
      var append = '#';
      var pathLink = urlMap[append + path];
      if (pathLink) {
        if (currentLink) {
          currentLink.parent().removeClass('active');
        }
        currentLink = pathLink;
        currentLink.parent().addClass('active');
      }
    });
  };
}]);
