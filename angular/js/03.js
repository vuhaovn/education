angular
.module('project', ['ngRoute', 'firebase'])
.value('fbURL', 'http://ng-projects-list.firebaseio.com/')

.service('fbRef', function(fbURL) {
  return new Firebase(fbURL)
})

.service('fbAuth', function($q, $firebase, firebaseAuth, fbRef) {
  var auth;
  return function() {
    if ( auth ) return $q.when(auth);
    var deferred = $q.defer();
    $firebaseAuth(fbRef).$authAnonymously().then(function(authData) {
      auth = authData;
      deferred.resolve(authData);
    });
    return deferred.promise;
  }
})

.service('Projects', function($q, $firebase, fbRef, fbAuth) {
  var self = this;
  this.fetch = function () {
    if (this.projects) return $q.when(this.projects);
    return fbAuth().then(function(auth) {
      var $projects = $firebase(fbRef.child('projects/' + auth.auth.uid));
      $projects.$set(window.projectsArray);
      return self.projects = $projects.$asArray();
    });
  };
})

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'03a.html',
      resolve: {
        projects: function (Projects) {
          return Projects.fetch();
        }
      }
    })
    .when('/edit/:projectId', {
      controller:'EditCtrl',
      templateUrl:'03b.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'03b.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
 
.controller('ListCtrl', function($scope, projects) {
  $scope.projects = projects;
})
 
.controller('CreateCtrl', function($scope, $location, Projects) {
  $scope.save = function() {
      Projects.projects.$add($scope.project).then(function(data) {
          $location.path('/');
      });
  };
})
 
.controller('EditCtrl',
  function($scope, $location, $routeParams, Projects) {
    var projectId = $routeParams.projectId,
        projectIndex;
 
    $scope.projects = Projects.projects;
    projectIndex = $scope.projects.$indexFor(projectId);
    $scope.project = $scope.projects[projectIndex];
 
    $scope.destroy = function() {
        $scope.projects.$remove($scope.project).then(function(data) {
            $location.path('/');
        });
    };
 
    $scope.save = function() {
        $scope.projects.$save($scope.project).then(function(data) {
           $location.path('/');
        });
    };
});