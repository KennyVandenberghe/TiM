ProjectController = RouteController.extend({
  page: 'projects'
});

Router.map(function() {
  this.route('projects', {
    path: '/projects',
    controller: ProjectController
  });
});
