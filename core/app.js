(function(){
    //adds copy right statement
    $('#copyRight').html('© copyright ' + (new Date()).getFullYear());


    angular.module('bookSpaceApp',['appRoutes'])
        .constant('env','live')
        .constant('baseApi','http://it-ebooks-api.info/v1/search/');

	
})();
