
$(document).ready(function(){
    //adds copy right statement
    var copyRightYear =(new Date()).getFullYear();
    $('.copyRight').html('© brahma 2014-' + copyRightYear);

});

/*Immediately invoked function expression*/
(function(){
    angular.module('bookSpaceApp',['appRoutes','ngCookies','ngAnimate'])
        .constant('env','live')
        .constant('baseApi','http://it-ebooks-api.info/v1/search/');
})();
