angular.module('bookSpaceApp')
        .controller("ListController",['$scope','bookFactory',fnListController])
        .run();

function fnListController($scope,bookFactory,cfpLoadingBar){

    $scope.getQuery =function(inputQuery)
    {


        bookFactory.getBooks(inputQuery)
            .then(function(response){

                $scope.status =response.status;

                if(response.data.Total == '0')
                {
                    $scope.status="0";
                    $scope.message='try something else, no result';
                }
                else if (response.data.Error != '0'){
                    $scope.status="0";
                    $scope.message='something is not working ' + response.data.Error ;
                }
                else
                {
                    var paging = response.data.Total/10;
                    var  remainder = paging % 10 ;
                    if (remainder != 0){
                        $scope.TotalPages = paging + 1;
                        $scope.CurrentPage =1;
                    }

                    $scope.books =response.data.Books;
                }

            });


    };
    $scope.getByPage =function (inputQuery){
        $scope.CurrentPage++;

        if ($scope.CurrentPage <= $scope.TotalPages){
            bookFactory.getBooksByPage(inputQuery,$scope.CurrentPage)
                .then(function(response){

                    $scope.books =response.data.Books ;
                });
        }


    }
}