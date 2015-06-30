HomeController = RouteController.extend({
  rootPane: 'home',
  page: 'home'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    controller: HomeController
  });
});
