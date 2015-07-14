TodoController = RouteController.extend({
  page: 'todos',
  onBeforeAction: function() {
    Session.set('topbarTitle', "Todo's");
    this.next();
  }
});

Router.map(function() {
  this.route('todos', {
    path: '/todos',
    controller: TodoController
  });
});
