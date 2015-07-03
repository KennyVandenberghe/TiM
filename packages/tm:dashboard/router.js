HomeController = RouteController.extend({
  page: 'home'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    controller: HomeController
  });
});
