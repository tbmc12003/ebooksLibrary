angular.module('bookSpaceApp').controller("DetailsController",fnDetailsController);

function fnDetailsController($scope,env){
    if(env === 'live'){
        /* live begins here*/
    }
    else if(env === 'demo'){
        /* demo begins here*/
        $scope.message='Hello this is DetailsController';
    }
}