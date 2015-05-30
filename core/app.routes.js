angular.module("appRoutes",['ngRoute'])
    .config(['$routeProvider',routeConfiguration]).run();

function routeConfiguration($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'login/LogInView.html',
            controller:'LoginController'
        })
        .when('/Login',{
            templateUrl:'login/LogInView.html',
            controller:'LoginController'
        })
        .when('/List',{
            templateUrl:'list/ListView.html',
            controller:'ListController'
        })
        .when('/Details',{
            templateUrl:'details/DetailsView.html',
            controller:'DetailsController'
        })
        .when('/404',{
            templateUrl:'404.html'
        })
        .otherwise({
            redirectTo:'/'
        });
}
