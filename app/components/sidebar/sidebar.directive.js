(function () {
    'use strict';

    angular
        .module('app.components')
        .directive('sideBar', sideBar);
    
    function sideBar() {
        return {
            templateUrl: '/components/sidebar/sidebar.html',
            restrict: 'E',
            controller: 'SideBarController',
            controllerAs: 'vm'
        };
    }
}());