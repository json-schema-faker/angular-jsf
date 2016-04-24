if (jsf === undefined) {
    throw new Error('jsf variable (JSON Schema Faker object) has not been found\n' +
        'angular-jsf can\'t do without it. Include jsf library to your application');
}

angular.module('jsf', [])

.constant('jsfGenerator', jsf)

.constant('jsfHttpStatus', {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    CONNECTION_TIMED_OUT: 110,
    CONNECTION_REFUSED: 111,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    INTERNAL_SERVER_ERROR: 500
})

.config(['$provide', function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}])

.service('jsfRegisterMock',
    ['$httpBackend', '$log', 'jsfGenerator', 'jsfHttpStatus',
    function($httpBackend, $log, jsfGenerator, jsfHttpStatus){

    return function(request){
        $log.info('JSF:', request.name, 'registered');
        $httpBackend
            .when(request.method, request.url, request.data, request.headers)
            .respond(function(method, url, data, headers, params){
                $log.info('JSF:', request.name, 'called', method, url, headers);
                return [
                    jsfHttpStatus.OK,
                    //response,
                    'response' in request ? request.response : jsfGenerator(request.responseSchema),
                    request.responseHeaders
                ];
        });
    };
}]);
