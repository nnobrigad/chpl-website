;(function () {
    'use strict';

    angular.module('app.product')
        .controller('ProductController', ['$scope', '$log', '$routeParams', '$modal', 'commonService', 'authService', function($scope, $log, $routeParams, $modal, commonService, authService) {
            var vm = this;

            vm.activate = activate;
            vm.openLastModified = openLastModified;

            vm.activate();

            ////////////////////////////////////////////////////////////////////

            function activate () {
                vm.productId = $routeParams.id;
                commonService.getProduct(vm.productId)
                    .then(function (data) {
                        vm.product = data;
                    }, function (error) {
                        $log.error(error);
                    });
                commonService.getCap(vm.productId)
                    .then(function (data) {
                        vm.correctiveActionPlan = data.plans;
                    }, function (error) {
                        $log.error (error);
                    });
                vm.isAuthed = authService.isAuthed();
            }

            function openLastModified () {
                vm.modalInstance = $modal.open({
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceController',
                    controllerAs: 'modalVm',
                    animation: false,
                    resolve: {
                        items: function() {
                            return vm.product.lastModifiedItems;
                        }
                    },
                    size: 'sm'
                });
            }
        }]);

    angular.module('app.product')
        .controller('ModalInstanceController', ['$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {
            var vm = this;
            vm.items = items;
            vm.ok = function () {
                $modalInstance.close('ok');
            };
        }]);
})();
