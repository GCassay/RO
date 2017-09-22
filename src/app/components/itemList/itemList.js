angular.module('app')
      .component('itemListComponent', {
        templateUrl: "./app/templates/itemListView.html",
        controller: itemListController
      });

function itemListController($scope) {
  var vm = () => $scope;
  var a = algo * 2;
  return vm;
}
