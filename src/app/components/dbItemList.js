angular.module('app')
      .component('dbItemList', {
        templateUrl: "./app/templates/dbItem.temp.html",
        controller: itemController
      });

function itemController() {

  var itemList = [
    {
      id: 1,
      name: "aaa",
      type: 1,
      vprice: 10,
      bprice: 0
    },
    {
      id: 2,
      name: "bbb",
      type: 2,
      vprice: 1000,
      bprice: 0
    },
    {
      id: 3,
      name: "ccc",
      type: 6,
      vprice: 5300,
      bprice: 0
    },
    {
      id: 4,
      name: "ddd",
      type: 4,
      vprice: 50,
      bprice: 250
    },
    {
      id: 5,
      name: "eee",
      type: 1,
      vprice: 1000,
      bprice: 2500
    },
    {
      id: 6,
      name: "fff",
      type: 7,
      vprice: 1,
      bprice: 15
    },
    {
      id: 7,
      name: "ggg",
      type: 3,
      vprice: 15000,
      bprice: 0
    },
    {
      id: 8,
      name: "hhh",
      type: 3,
      vprice: 1,
      bprice: 15
    },
    {
      id: 9,
      name: "iii",
      type: 6,
      vprice: 1,
      bprice: 15
    },
    {
      id: 10,
      name: "kkk",
      type: 2,
      vprice: 5,
      bprice: 100
    }
  ];
  var vm = this;
  vm.listView = true;
  vm.a = "aaaaa";
  vm.items = itemList;
  console.log(vm.items);
}
