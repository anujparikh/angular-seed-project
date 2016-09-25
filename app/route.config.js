(function () {
    'use strict';

    angular
        .module('app.core')
        .config(appConfig);

    function appConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/featureA');

        $stateProvider
            .state('featureA', {
                url: '/featureA',
                templateUrl: '/features/featureA/featureA.html',
                controller: 'FeatureAController',
                controllerAs: 'fAVm'
            })
            .state('featureB', {
                url: '/featureB',
                templateUrl: '/features/featureB/featureB.html',
                controller: 'FeatureBController',
                controllerAs: 'fBVm'
            });
    }
}());