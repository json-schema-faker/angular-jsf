/* global angular */

var demoApp = angular.module('demoApp');

demoApp.run(function (jsfRegisterMock) {

    // GET /users/

    jsfRegisterMock({
        name: 'User Collection',
        url: '/users',
        method: 'GET',
        responseSchema: schemas.UserCollectionGet
    });

    // GET /users/{id}

    jsfRegisterMock({
        name: 'User Item',
        url: /\/users\/(\d+)/,
        method: 'GET',
        responseSchema: schemas.UserItemGet
    });

    // POST /users/{id}

    jsfRegisterMock({
        name: 'User Item',
        url: /\/users\/(\d+)/,
        method: 'POST',
        response: ''
    });

    // PUT /users

    jsfRegisterMock({
        name: 'User Item',
        url: '/users',
        method: 'PUT',
        responseSchema: schemas.UserItemCreate
    });

    // DELETE /users/{id}

    jsfRegisterMock({
        name: 'User Item',
        url: /\/users\/(\d+)/,
        method: 'DELETE',
        response: ''
    });
});
