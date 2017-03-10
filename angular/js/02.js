angular
.module('todoApp', [])
.controller('todoController', ['$scope', function($scope){
  
  $scope.todos = [
    {text: 'action 01', done:false},
    {text: 'action 02', done:false},
    {text: 'action 03', done:false},
    {text: 'action 04', done:false}
  ];
  
  $scope.addTodo = function() {
    $scope.todos.push({text: $scope.todoText, done:false});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.delete = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if ( !todo.done ) {
        $scope.todos.push(todo);
      };
    });
  };

}]);