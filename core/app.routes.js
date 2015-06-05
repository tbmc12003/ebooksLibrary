angular.module("appRoutes",['ngRoute'])
    .config(['$routeProvider',routeConfiguration]).run();

function routeConfiguration($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'list/ListView.html',
            controller:'ListController'
        })
        .when('/Policy',{
            templateUrl:'privacy-policy.html'
        })
        .when('/404',{
            templateUrl:'404.html'
        })
        .otherwise({
            redirectTo:'/404'
        });
}
