// angular module for settings/profile
angular.module("profileModule", ["constantModule", "ui.select"])
    .controller("profileCtrl", function($scope) {

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

    });