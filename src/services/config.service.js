angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapixyz-env.eba-rne8mazt.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);