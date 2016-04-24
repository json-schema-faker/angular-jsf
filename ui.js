/* global angular */

var demoApp = angular.module('demoApp', ['jsf']);

demoApp.controller('demoCtrl', function ($scope, $http) {

    function displayJSON(response) {
        $scope.result = JSON.stringify(response.data, null, 4);
    }

    function displaySchema(schema) {
        return function(){
            $scope.schema = JSON.stringify(schema, null, 4);
        }
    }

    $scope.getUsersCollectionClick = function () {
        $http({
            method: "GET",
            url: '/users'
        }).then(displayJSON).then(displaySchema(schemas.UserCollectionGet));
    };

    $scope.getUserItemClick = function () {
        $http({
            method: "GET",
            url: '/users/123'
        }).then(displayJSON).then(displaySchema(schemas.UserItemGet));
    };

    $scope.postUserItemClick = function () {
        $http({
            method: "POST",
            url: '/users/71'
        }).then(displayJSON).then(displaySchema(''));
    };

    $scope.putUserItemClick = function () {
        $http({
            method: "PUT",
            url: '/users'
        }).then(displayJSON).then(displaySchema(schemas.UserItemCreate));
    };

    $scope.deleteUserItemClick = function () {
        $http({
            method: "DELETE",
            url: '/users/617'
        }).then(displayJSON).then(displaySchema(''));
    };
});
