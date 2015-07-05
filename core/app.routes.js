angular.module("appRoutes",['ngRoute'])
    .config(['$routeProvider',routeConfiguration]).run();

function routeConfiguration($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'site-maintenance.html'
        })
        .when('/List',{
            templateUrl:'/404'
          
        })
        .when('/Details/:ID',{
            templateUrl:'details/DetailsView.html',
            controller:'DetailsController'
        })
        .when('/Policy',{
            templateUrl:'/404'
        })
        .when('/404',{
            templateUrl:'404.html'
        })
        .otherwise({
            redirectTo:'/404'
        });
}
