'use strict';

angular.module('tempistApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var peopleRef = new Firebase("https://tempist.firebaseio.com/people");
    // Automatically syncs everywhere in realtime
    $scope.people = $firebase(peopleRef);
    
    $scope.addPerson = function() {
      // AngularFire $add method
      $scope.people.$add($scope.newPerson);
      //or add a new person manually
      peopleRef.update({name: 'Alex', age: 35});

      $scope.newPerson = "";
    }
    
    $scope.awesomeThings = {
      'Name':"JBizzle"
    };
  });
