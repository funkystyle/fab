/* store module */
angular.module("addCouponModule", ["ui.select", "ngSanitize", "ui.bootstrap", "toastr"])
    .controller("addCouponCtrl", ["$scope", function($scope) {
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.drinks = [];
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.mytime = new Date();
        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };
        $scope.ismeridian = true;

        $scope.addStore = function(store) {
            toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', { timeOut: 5000 })
        };

        $scopesomeGroupFn = function(item) {
            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

        };

        $scope.people = [
            { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
            { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
            { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
            { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
            { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
            { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
            { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
            { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
            { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
            { name: 'Nicolás', email: 'nicolas@email.com', age: 43, country: 'Colombia' }
        ];
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