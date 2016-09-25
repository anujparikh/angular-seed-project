(function () {
    'use strict';

    angular
        .module('app.features')
        .controller('FeatureAController', FeatureAController);

    FeatureAController.$inject = [];

    function FeatureAController() {
        console.log('Inside featureA controller');
    }
}());
