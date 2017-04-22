angular.module("addStoreModule", ["ui.select", "ngSanitize", "ui.bootstrap", "toastr"])
    .controller("addStoreCtrl", ["$scope", "$timeout", "toastr", function($scope, $timeout, toastr) {
        $scope.store = {
            created_date: new Date(),
            modified_date: new Date()
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[1];
        $scope.popup2 = {
            opened: false
        };
        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };
        $scope.clear = function() {
            $scope.store.relatedStore = undefined;
        };

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
    }]);