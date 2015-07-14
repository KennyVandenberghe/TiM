HomeController = RouteController.extend({
  page: 'home',
  onBeforeAction: function() {
    Session.set('topbarTitle', 'Home');
    this.next();
  }
});

Router.map(function() {
  this.route('home', {
    path: '/',
    controller: HomeController
  });
});
