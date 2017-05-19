'use strict';

angular.module('app', ['ui.router']);
// 路由配置
'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$stateProvider.state('main',{
			url:'/main',
			templateUrl:'view/main.html',
			controller:'mainCtrl'
		}).state('position',{
			url:'/position/:id',
			templateUrl:'view/position.html',
			controller:'positionCtrl'
		});
		
		$urlRouterProvider.otherwise('main');

}]);



angular.module('app').controller('mainCtrl', ['$scope', function ($scope) {
	$scope.positionList = [{
		positionId: '1',
		positionName: '产品经理',
		company: '千度',
		salary: '8-16K',
		time: '3月31号',
		city: '杭州',
		zone:'西溪',
		academic: '本科',
		workerYear: '3-5年',
		scale: '2000-5000人',
		companyState: '上市公司',
		industry: '互联网',
		imgSrc: 'img/company.png'
	},{
		positionId: '2',
		positionName: 'UI设计',
		company: '六一',
		salary: '6-12K',
		time: '3月22号',
		city: '杭州',
		zone:'长河',
		academic: '专科',
		workerYear: '1-3年',
		scale: '10-25人',
		companyState: '天使轮',
		industry: '互联网',
		imgSrc: 'img/company-2.png'

	}];
}]);
angular.module('app').controller('positionCtrl', ['$scope', function ($scope) {

}]);
/**
 * Created by a56832357 on 17/5/2.
 */
angular.module('app').directive('appBottomBtn',[function () {
    var appBottomBtn= {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/bottomBtn.html'
    }
    return appBottomBtn;
}]);

angular.module('app').directive('appFoot',[function () {
	return{
		restrict:'A',
		replace: true,
		templateUrl:'view/template/foot.html'
	};
}]);
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

angular.module('app').directive('appHeadTip',[function () {
	return{
		restrict:'A',
		replace: true,
		templateUrl:'view/template/headTip.html'
	};
}]);





/**
 * Created by a56832357 on 17/5/2.
 */
angular.module('app').directive('appPositionInfo',[function () {
    return{
        restrict:'A',
        replace: true,
        templateUrl:'view/template/positionInfo.html'
    };
}]);
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