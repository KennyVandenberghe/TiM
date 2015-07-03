TodoController = RouteController.extend({
  page: 'todos'
});

Router.map(function() {
  this.route('todos', {
    path: '/todos',
    controller: TodoController
  });
});
