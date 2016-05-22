angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function() {
    console.log("Hello there, this is the helloWorld controller function in the mainCtrl!");
  };
})

.controller('coolCtrl', function($scope) {
  $scope.whoAmI = function() {
    console.log("Hello there, this is the coolCtrl function!");
  };

  $scope.helloWorld = function() {
    console.log("This is not the main Ctrl!");
  };
});
