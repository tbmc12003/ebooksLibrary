angular.module('bookSpaceApp').controller("DetailsController",['$scope','$routeParams','bookFactory' ,fnDetailsController] );

function fnDetailsController($scope,$routeParams,bookFactory){
    $scope.message='Hello this is DetailsController';
    var bookId =$routeParams.ID.replace(':','').trim();

    bookFactory.getBookById(bookId)
        .then(function(response){
            console.log(response);

            $scope.status =response.status;
            if (response.data.Error != '0'){
                $scope.status="0";
                $scope.message='Sorry, something is not working, please try again later';
            }
            else
            {
                $scope.status="200";
                $scope.book =response.data.book;
            }

        })
}