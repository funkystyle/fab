angular.module("storeServiceModule", ["constantModule"])
    .factory("storeFactory", ["$http", "$q", "URL", function ($http, $q, URL) {
        return {
            // get all stores
            get: function () {
                var def = $q.defer();

                $http({
                    url: URL.store,
                    method: "GET"
                }).then(function (data) {
                    def.resolve(data.data);
                }, function (error) {
                   console.log(error.data);
                   def.reject(error.data);
                });

                return def.promise;
            }
        }
    }]);
