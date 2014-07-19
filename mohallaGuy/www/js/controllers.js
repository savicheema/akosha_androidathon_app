angular.module('starter.controllers', [])

/*.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})*/

.controller('LocationCtrl', function($scope, $cordovaGeolocation){
    $scope.title = "Geo-location";
    $scope.getLocation = function(){
        $cordovaGeolocation.getCurrentPosition().then(function(position){
            console.log(position);
            $scope.location = position;
        }, function(err){
            $scope.error = "did not find location";
            console.log(err);
        });
    };
});
