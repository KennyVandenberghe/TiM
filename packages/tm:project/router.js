ProjectController = RouteController.extend({
  page: 'projects',
  onBeforeAction: function() {
    Session.set('topbarTitle', 'Projects');
    this.next();
  }
});

Router.map(function() {
  this.route('projects', {
    path: '/projects',
    controller: ProjectController
  });
});
