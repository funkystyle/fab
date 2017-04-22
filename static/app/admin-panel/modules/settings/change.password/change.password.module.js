angular.module("changePasswordModule", ["constantModule", "toastr"])
	.controller('changePasswordCtrl', function($scope, $http, mainURL, URL, toastr){
		$scope.change = {};

		// change password click function
		$scope.changePassword = function (obj) {
			var object = {
				user_id: "",
				token: "",
				new_password: obj.new_password
			};

			$http({
				url: mainURL + URL.changePassword,
				method: "POST",
				data: obj
			}).then(function (data) {
				console.log(data);
				toastr.success(data.data, "Success!");
			}, function (error) {
				console.log(error);
				toastr.error(error.data.error, "Error!");
			});
		}
	});