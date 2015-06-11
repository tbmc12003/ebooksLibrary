
angular.module('bookSpaceApp')
                        .factory('bookFactory',['$http','$q','$timeout','baseApi',bookServiceConfiguration]);


// /search/query
// /search/query/page/pageNumber
// var fullApi=baseApi + query + '/page/' + pageNumber;
// var fullApi=baseApi + query;
function bookServiceConfiguration($http,$q,$timeout,baseApi) {
    var dataFactory = {};
    dataFactory.getBooks = function (query) {
        var apiUrl=baseApi + query;
        /*
        var defer =$q.defer();
        $timeout(function(){
            promise.then(function (data) {

                defer.resolve(data);
            });
        },2500);*/
        return $http.get(apiUrl);
    };

    dataFactory.getBooksByPage = function (query, pageNumber) {
        var apiUrl=baseApi + query + '/page/' + pageNumber;
        return $http.get(apiUrl);
    };

    dataFactory.getBookById =function(id){
        var apiUri='http://it-ebooks-api.info/v1/book/'+ id;
        return $http.get(apiUri);
    };


    return dataFactory;
}

