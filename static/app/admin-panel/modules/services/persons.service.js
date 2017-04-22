angular.module("personFactoryModule", ['constantModule'])
.factory("personFactory", function ($http, mainURL, URL, $q) {
    return {
        getAll: function () {
            var d = $q.defer();
            $http({
                url: mainURL + URL.persons,
                headers: {
                    authorization: "917a3851-72fe-416e-b5bd-8bae01d25e1c"
                },
                method: "GET"
            }).then(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error)
            });

            return d.promise;
        }
    }
});