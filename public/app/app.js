'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  'use strict';

  angular.module('app', ['ngMaterial', 'ui.router']).config(function ($stateProvider) {
    var goWorld = {
      name: 'world',
      url: '/world',
      template: '<db-item-list></db-item-list>'
    };
    var goSystems = {
      name: 'systems',
      url: '/systems',
      templateUrl: './app/templates/systems.temp.html'
    };
    var goItems = {
      name: 'items',
      url: '/items',
      template: '<db-item-list item-list="{{$ctrl.items}}" list-view="{{true}}"></db-item-list>'
    };

    $stateProvider.state(goWorld);
    $stateProvider.state(goSystems);
    $stateProvider.state(goItems);
  });
})();

angular.module('app').component('dbItemList', {
  templateUrl: "./app/templates/dbItem.temp.html",
  controller: itemController
});

function itemController($mdDialog, $scope) {

  var itemList = [{
    id: 1,
    name: "aaa",
    type: 1,
    vprice: 10,
    bprice: 0
  }, {
    id: 2,
    name: "bbb",
    type: 2,
    vprice: 1000,
    bprice: 0
  }, {
    id: 3,
    name: "ccc",
    type: 6,
    vprice: 5300,
    bprice: 0
  }, {
    id: 4,
    name: "ddd",
    type: 4,
    vprice: 50,
    bprice: 250
  }, {
    id: 5,
    name: "eee",
    type: 1,
    vprice: 1000,
    bprice: 2500
  }, {
    id: 6,
    name: "fff",
    type: 7,
    vprice: 1,
    bprice: 15
  }, {
    id: 7,
    name: "ggg",
    type: 3,
    vprice: 15000,
    bprice: 0
  }, {
    id: 8,
    name: "hhh",
    type: 3,
    vprice: 1,
    bprice: 15
  }, {
    id: 9,
    name: "iii",
    type: 6,
    vprice: 1,
    bprice: 15
  }, {
    id: 10,
    name: "kkk",
    type: 2,
    vprice: 5,
    bprice: 100
  }];
  var vm = this;
  vm.activeView = null;
  vm.listView = true;
  vm.a = "aaaaa";
  vm.items = itemList;
  // $scope.items = vm.items;
  console.log(vm.items);
  vm.toggleView = toggleView;
  vm.showPanel = showPanel;
  vm.holi = "holi";

  function toggleView(view) {
    vm.listView = view;
    vm.activeView = vm.listView ? "./app/templates/world.temp.html" : "";
  }

  function showPanel(ev) {

    $mdDialog.show(_defineProperty({
      controller: DialogController,
      templateUrl: 'app/templates/world.temp.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      preserveScope: true,
      disableParentScroll: true,
      openFrom: '#dial',
      closeTo: '#dial',
      fullscreen: true,
      locals: {
        items: vm.items,
        holi: vm.holi
      }
    }, 'fullscreen', vm.customFullscreen)).then(function (answer) {
      vm.status = 'You said the information was "' + answer + '".';
      console.log('algo' + vm.items);
      console.log(vm.status);
    }, function () {
      vm.status = 'You cancelled the dialog.';
      console.log('algo' + vm.items);
      console.log(vm.status);
    });

    function DialogController($scope, $mdDialog, items, holi) {

      $scope.items = items;
      $scope.holi = holi;

      $scope.closeDialog = function () {
        $mdDialog.hide();
      };

      $scope.hide = function () {
        $mdDialog.hide();
      };

      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.answer = function (answer) {
        $mdDialog.hide(answer);
      };

      function sendEmail() {}
    }
  };
}

angular.module('app').component('siteContent', {});

angular.module('app').component('siteLayout', {
  templateUrl: "./app/templates/siteLayout.temp.html"
});

// sysPet.js


// world.js