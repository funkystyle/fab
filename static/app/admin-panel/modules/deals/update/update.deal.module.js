/* store module */
angular.module("updateDealModule", ["ui.select", "ngSanitize", "ui.bootstrap", "toastr"])
    .controller("updateDealCtrl", ["$scope", function ($scope) {
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.drinks = [];

        var drinks = [
            'coke',
            'melange',
            'chai latte',
            'almdudler',
            'beer',
            'vodka',
            'coconut milk',
            'orange juice',
            'wine',
            'whisky',
            'sex on the beach'
        ];
        for (var i = 1; i <= 20; i++) {
            var drink = drinks[Math.floor(Math.random() * drinks.length)];
            $scope.drinks.push('drink ' + i + ': ' + drink);
        }

        $scope.pageChangeHandler = function(num) {
            console.log('drinks page changed to ' + num);
        };
    }])
    .filter('propsFilter', function() {
        return function(items, props) {
            var out = [];
            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function(item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }
            return out;
        };
    });