angular.module('app').directive('appHeadBar',[function () {
	return{
		restrict:'A',
		replace: true,
		templateUrl:'view/template/headbar.html',
		scope: {
			maintitle:'='
		},
		link: function (scope) {
			scope.back = function () {
				window.history.back();
			};
		}
	};
}]);