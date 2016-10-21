(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SideBarController', SideBarController);

    function SideBarController($timeout, $q, $log, $mdBottomSheet) {
        var vm = this;
        vm.simulateQuery = false;
        vm.isDisabled = false;
        vm.states = loadStates();
        vm.querySearch = querySearch;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange = searchTextChange;
        vm.newState = newState;
        vm.openBottomSheet = openBottomSheet;

        function newState(state) {
            alert("This functionality is yet to be implemented!");
        }

        function querySearch(query) {
            var results = query ? vm.states.filter(createFilterFor(query)) : vm.states, deferred;
            if (vm.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                },
                    Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + angular.toJson(item));
        }

        //build list of states as map of key-value pairs
        function loadStates() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                 Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                 Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                 Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                 North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                 South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                 Wisconsin, Wyoming';
            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        //filter function for search query
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        function openBottomSheet() {
            $mdBottomSheet.show({
                templateUrl: '/components/sidebar/test.html',
            });
        }
    }
}());
