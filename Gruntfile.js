module.exports=function(grunt){

    grunt.registerTask('default', function(name){
        grunt.log.writeln('Welcome to grunt task ' + name);
    });

    grunt.registerTask('addNumbers', function(firstNumber, secondNumber){
        if(isNaN(firstNumber)){
            grunt.warn('the first argumnet must be a number');
        }
        if(isNaN(secondNumber)){
            grunt.warn('the second argumnet must be a number');
        }
        var ans = Number(firstNumber) + Number(secondNumber);
        grunt.log.writeln(ans);

    });
    grunt.registerTask('all',['default:Sujoy','addNumbers:5:7']);
};
