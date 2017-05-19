
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