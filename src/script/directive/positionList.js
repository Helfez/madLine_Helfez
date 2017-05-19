angular.module('app').directive('appPositionList',[function () {
	var appPositionListDirective = {
		restrict:'A',
		replace: true,
		templateUrl: 'view/template/positionList.html',
		scope:{
			position:'='
		}
	};

	return appPositionListDirective;
}]);