angular.module('starter.services', [])

.service('GeoLocation',function($resource, $cordovaGeolocation, $ionicPopup){
    this.getCoordinates = function(){
        $cordovaGeolocation.getCurrentPosition().then(function(position){
            //Send it to API
        }, function(err){
            $ionicPopup.alert({
                title: 'Sorry',
                content: 'There was some error'
            }).then(function(){
                $state.go('services');
            });
        });
    };
})

.factory('NetworkStatus',function($cordovaNetwork, $ionicPopup){
    var netFactory = {};

    netFactory.isOffline = function(){
        return $cordovaNetwork.isOffline;
    };

    netFactory.isOnline = function(){
        return $cordovaNetwork.isOnline;
    };

    netFactory.type = function(){
        return $cordovaNetwork.getNetwork();
    };
})

.service('Loading',function($ionicLoading, $timeout){
    this.showLoading = function(){
        $ionicLoading.show({
            template: 'Loading...'
        });
    };   
    this.stopLoading = function(){
        $timeout(function(){
            $ionicLoading.hide();
        },600);
    }; 
});
/**
 * A simple example service that returns some data.
 */
/*.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})*/

/*.factory('GeoLocation',function($cordovaGeolocation){
    return {
        getPosition: function(){
           $cordovaGeolocation.getCurrentPosition().     
        }
    }
});*/
