'use strict';

(function () {
  'use strict';

  angular.module('app', []);
})();

angular.module('app').component('itemListComponent', {
  templateUrl: "./app/templates/itemListView.html",
  controller: itemListController
});

function itemListController($scope) {
  var vm = function vm() {
    return $scope;
  };
  var a = algo * 2;
  return vm;
}