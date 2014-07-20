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

.controller('ListCtrl', function($scope, $cordovaGeolocation){
    /*
     *show list of all services provided, with the image
     *and function to send in GET request the category chosen
     *with the user coordinates
     */
    $scope.services = ['Plumber', 'Electrician', 'Mechanic'];
    $scope.title = "Geo-location";

    /*$scope.sendServiceWithCoordinates = function(){
        // Call API
    }*/
    
    /*$scope.getLocation = function(){
        $cordovaGeolocation.getCurrentPosition().then(function(position){
            console.log(position);
            $scope.location = position;
        }, function(err){
            $scope.error = "did not find location";
            console.log(err);
        });
    };*/
})

.controller('SelectCtrl', function($scope){
    console.log("value");
});
