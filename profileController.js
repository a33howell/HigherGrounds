
var app = angular.module('profileApp', []);

app.controller('profileCtrl', function ($scope, $http) {
    var request = {
        method: 'get',
        url: 'RandomJSON.json',
        dataType: 'json',
        contentType: "application/json"
    };

    $scope.arrProfiles = new Array;

    $http(request)
        .success(function (jsonData) {
            $scope.arrProfiles = jsonData;
            $scope.list = $scope.arrProfiles;
        })
        .error(function () {

        });
});