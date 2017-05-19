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