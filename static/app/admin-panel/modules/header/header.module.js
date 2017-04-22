angular.module("headerModule", ["constantModule", "satellizer", "toastr"])
    .controller("headerCtrl", function($scope, $state, mainURL, URL, $state, $auth, $http, toastr) {
        $scope.state = $state;


        $scope.logout = function () {
            if($auth.isAuthenticated()) {
                $http({
                    url: mainURL+URL.logout,
                    method: "GET"
                }).then(function (data) {
                    console.log(data);
                    $auth.logout();

                    toastr.success("Successfully Logged out!", "Hey!");
                    $state.go('login');
                }, function (error) {
                    console.log(error);

                    toastr.error(error.data.error, 'Error');
                });
            }
        };
    });