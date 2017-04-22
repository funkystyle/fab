angular.module("registerModule", ["ui.select", "Directives", "satellizer", "ui.bootstrap", "constantModule"])
    .controller("registerCtrl", function($scope, $http, mainURL, URL) {
        console.log("registerctrl");

        $scope.register = {
            created_date: new Date(),
            modified_date: new Date(),
            status: "inactive",
            last_modified_by: ['1']
        };
        $scope.userLevels = [
            {
                level: "submitter",
                text: "Submitter"
            },
            {
                level: "editor",
                text: "Editor"
            },
            {
                level: "admin",
                text: "Admin"
            }
        ];


        $scope.registerNow = function(register) {
            register.city = "s";
            register.age = 45;
            register.gender = "male";

            console.log(register);
            $http({
                url: mainURL + URL.register,
                method: "POST",
                data: register
            }).then(function(data) {
                console.log("asdasdasdass", data);
            }, function(error) {
                console.log("error", error)
            });
        }
    })