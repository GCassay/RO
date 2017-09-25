( function() {
  'use strict';
  angular .module('app', ['ngMaterial','ui.router'])
  .config(function($stateProvider) {
    var goWorld = {
      name: 'world',
      url: '/world',
      template: '<db-item-list></db-item-list>'
    }
    var goSystems = {
      name: 'systems',
      url: '/systems',
      templateUrl: './app/templates/systems.temp.html'
    }
    var goItems = {
      name: 'items',
      url: '/items',
      template: '<db-item-list item-list="{{$ctrl.items}}" list-view="{{true}}"></db-item-list>'
    }

    $stateProvider.state(goWorld);
    $stateProvider.state(goSystems);
    $stateProvider.state(goItems);
  });

})();
