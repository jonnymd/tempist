'use strict';

angular.module('tempistApp')
  .controller('TempProfileCtrl', function ($scope) {
    $scope.temp = {
      "photo":"images/me.jpg",
      "firstName":"Jonny",
      "lastName":"Brennan",
      "aboutMe":"I like to do temporary stuff",
      "cellPhone":"(480) 227-9332",
      "streetAddress":"1694 E. Aloe Place",
      "city":"Chandler",
      "state":"AZ",
      "zip":"85286",
      "occupation":"Dentist",
      "frontOffice":false,
      "backOffice":false,
      "certifications": {
        "radiographs":true,
        "coronalPolish":false,
        "anesthesia":false,
        "laserDebridement":false,
        "currentCPR":false
      },
      "training":{
        "general":true,
        "os": false,
        "ortho": false,
        "pedo": false,
        "endo": false
      },
      "software":{
        "dentrix": true,
        "eaglesoft": false,
        "softdent": false
      },
      "availability": {
        "sunday":false,
        "monday":false,
        "tuesday":true,
        "wednesday":false,
        "thursday":false,
        "friday":true,
        "saturday":false
      },
      "experience":"6-9",
      "payrate":"$22",
      "milesToTravel":"50"
      
    }
  });
