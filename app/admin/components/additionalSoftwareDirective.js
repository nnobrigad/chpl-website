;(function () {
    'use strict';

    angular.module('app.admin')
        .controller('AdditionalSoftwareController', ['$log', '$scope', '$modal', function ($log, $scope, $modal) {
            var vm = this;

            vm.addItem = addItem;
            vm.editItem = editItem;
            vm.removeItem = removeItem;

            activate();

            ////////////////////////////////////////////////////////////////////

            function activate () {
                vm.displaySw = {};
                vm.groupCount = 0;
                for (var i = 0; i < vm.additionalSoftware.length; i++) {
                    if (vm.additionalSoftware[i].grouping === null) {
                        vm.displaySw['defaultGroup' + i] = [vm.additionalSoftware[i]];
                        vm.groupCount += 1;
                    } else {
                        if (!vm.displaySw[vm.additionalSoftware[i].grouping]) {
                            vm.displaySw[vm.additionalSoftware[i].grouping] = [];
                            vm.groupCount += 1;
                        }
                        vm.displaySw[vm.additionalSoftware[i].grouping].push(vm.additionalSoftware[i]);
                    }
                }
            }

            function addItem () {
                vm.editModalInstance = $modal.open({
                    templateUrl: 'admin/components/additionalSoftwareModal.html',
                    controller: 'EditAdditionalSoftwareController',
                    controllerAs: 'vm',
                    animation: false,
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        software: function () { return { name: '', version: '', certifiedProductSelfCHPLId: '' }; }
                    }
                });
                vm.editModalInstance.result.then(function (result) {
                    if (!vm.additionalSoftware) {
                        vm.additionalSoftware = [];
                    }
                    vm.additionalSoftware.push(result);
                }, function (result) {
                    if (result !== 'cancelled') {
                        console.debug('dismissed', result);
                    }
                });
            }

            function editItem (sw, index) {
                vm.editModalInstance = $modal.open({
                    templateUrl: 'admin/components/additionalSoftwareModal.html',
                    controller: 'EditAdditionalSoftwareController',
                    controllerAs: 'vm',
                    animation: false,
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        software: function () { return sw; }
                    }
                });
                vm.editModalInstance.result.then(function (result) {
                    vm.additionalSoftware[index] = result;
                }, function (result) {
                    if (result !== 'cancelled') {
                        console.debug('dismissed', result);
                    }
                });
            }

            function removeItem (index) {
                vm.additionalSoftware.splice(index, 1);
            }
        }])
        .directive('aiAdditionalSoftware', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'admin/components/additionalSoftware.html',
                bindToController: {
                    additionalSoftware: '=',
                    isEditing: '='
                },
                scope: {},
                controllerAs: 'vm',
                controller: 'AdditionalSoftwareController'
            };
        }]);
})();
