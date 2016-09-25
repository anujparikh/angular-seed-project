(function () {
    'use strict';

    angular
        .module('app.features')
        .controller('FeatureBController', FeatureBController);

    FeatureBController.$inject = [];

    function FeatureBController() {
        console.log('Inside featureB controller');
    }
}());
