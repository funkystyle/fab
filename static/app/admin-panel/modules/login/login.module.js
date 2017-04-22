angular.module("loginModule", ["Directives", "cgBusy", "constantModule", "satellizer"])
    .controller("loginCtrl", function($scope, $http, mainURL, URL, $auth, $state) {
        // Declaring variables
        $scope.login = {};

        // login click function
        $scope.loginNow = function(login) {
            $scope.load = $http({
                url: mainURL + URL.login,
                method: "POST",
                data: login
            }).then(function(data) {
                console.log(data);
                if(data['data']['data']) {
                    console.log(data.data.data);
                    $auth.setToken(data.data.data.login_token);
                } else  {
                    $auth.setToken(data.data.login_token);
                }
                $state.go("header.dashboard");
            }, function(error) {
                console.log("error", error)
            });
        }
    });