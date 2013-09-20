'use strict';


eventsApp.controller('EventController',
  function EventController($scope, eventData) {
    $scope.htmlSnippet = "<strong>yes!</strong>";
    $scope.bool = true;
    $scope.myStyle = {color: 'red'};
    $scope.sortorder = '-upVoteCount'
    
    $scope.event = eventData.event;
    
    
      
    $scope.upVoteSession = function(session){
      session.upVoteCount ++;
    }

    $scope.downVoteSession = function(session){
      session.upVoteCount --;
    }

  }
);