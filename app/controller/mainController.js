var optimusAM = angular.module('optimusAM', ['ngRoute']);

// configure our routes
optimusAM.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/view/main.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'app/view/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'app/view/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
optimusAM.controller('mainController', function($scope) {
    // create a message to display in our view
    //$scope.message = 'Everyone come and see how good I look!';
    console.log("Hi");
});
