/* store module */
angular.module("storeModule", ["angularUtils.directives.dirPagination", "storeServiceModule"])
    .controller("storeCtrl", ["$scope", "storeFactory", function($scope, storeFactory) {
        $scope.currentPage = 1;
        $scope.search = {
            search: undefined
        };
        $scope.show = false;
        $scope.check = {
            all: false,
            check: {}
        };
        $scope.pageSize = 10;

        // selectAll function
        $scope.selectAll = function() {
            angular.forEach($scope.check.check, function(val, key) {
                $scope.check.check[key] = $scope.check.all;
            });
            $scope.show = $scope.check.all;
        }

        // check for individual check boxes
        $scope.checkBox = function(val) {
            var count = 0;

            angular.forEach($scope.check.check, function(val, key) {
                if (val) {
                    count++
                }
            });

            $scope.check.all = (count == Object.keys($scope.check.check).length) ? true : false;
            $scope.show = (count == 0) ? false : true;
        }

        // delete selected check boxes
        $scope.deleteSelected = function() {
            var deletedArray = [];
            angular.forEach($scope.check.check, function(val, key) {
                angular.forEach($scope.stores, function(item, i) {
                    if (item.id == key && val && deletedArray.indexOf(item.id) == -1) {
                        deletedArray.push(item.id);
                        $scope.stores.splice(i, 1);
                    }
                });
            });

            $scope.show = false;
            console.log(deletedArray);
        }

        $scope.stores = [{
                id: 1,
                name: "sdsadjlsa",
            },
            {
                id: 2,
                name: "sakd",
            },
            {
                id: 3,
                name: "sakdhgsahd",
            },
            {
                id: 4,
                name: "weiryiwer",
            },
            {
                id: 5,
                name: "jwerwejrjw",
            },
            {
                id: 6,
                name: "askd;k;lsad",
            },
            {
                id: 7,
                name: "owqueowq",
            },
            {
                id: 8,
                name: "rfd",
            },
            {
                id: 9,
                name: "safuidsfi",
            },
            {
                id: 10,
                name: "sahfdksahkfas",
            },
            {
                id: 11,
                name: "rjfdjf",
            }
        ];

        angular.forEach($scope.stores, function(item) {
            $scope.check.check[item.id] = false;
        })

        $scope.pageChangeHandler = function(num) {
            console.log('drinks page changed to ' + num);
        };

        $scope.toggleSidebar = function() {
            if ($("#sidebar-affix").css("right") == "0px") {
                $("#sidebar-affix").animate({ "right": '-1000', 'display': 'none' }, 500);
            } else {
                $("#sidebar-affix").animate({ "right": '0', 'display': 'block' }, 500);
            }
        }
    }]);