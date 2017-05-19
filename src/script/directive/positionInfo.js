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