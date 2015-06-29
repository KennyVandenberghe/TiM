var projects = [
	{
  title: 'first project',
  open: false,
  timeTracked: 0
	}
];

var todos = [
	{
  title: 'develop app',
  checked: false,
  timeTracked: 0
	}
];

Meteor.startup(function() {
  if (Projects.find().count() < projects.length) {
    _.each(projects, function(project) {
      var p = _.extend({}, Projects.default, project);
      if (Projects.find({ name: p.name }).count() < 1) {
        Projects.insert(p);
      }
    });
  }

  if (Todos.find().count() < todos.length) {
    _.each(todos, function(todo) {
      var d = _.extend({}, Todos.default, todo);
      Todos.insert(d);
    });
  }
});
