angular.module('bookSpaceApp').controller('LoginController',fnLoginController);


function fnLoginController($scope,env){
    if(env === 'live'){
        /* live begins here*/
    }
    else if(env === 'demo'){
        /* demo begins here*/
        $scope.message='Hello this is LoginController';
    }
}