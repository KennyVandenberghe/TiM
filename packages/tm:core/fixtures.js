var projects = [
	{
    title: 'first project',
    open: false,
    timeTracked: 0
	}
];

var todos = [
	{
    title: 'Wireframe app',
    checked: true,
    timeTracked: 0
	},
	{
    title: 'Develop app',
    checked: false,
    timeTracked: 0
  },
  {
    title: 'Use app',
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
      var projectId = Projects.findOne({})._id;
			_.extend(d, {projectId: projectId});
      Todos.insert(d);
    });
  }
});
