Todos = new Mongo.Collection('todos', {

});

Todos.timestampable();

Todos.allow(TM.Model.defaultAllow);

TM.registerNamespace('todo', Todos);

CollectionBehaviours.extendCollectionInstance(Todos);

TM.Model.Todo = {

};

Todos.helpers(TM.Model.Todo);

_.extend(Todos, {
  findById: function(todoId) {
    return Todos.find({ _id: todoId });
  },
  findOneById: function(todoId) {
    return Todos.findOne({ _id: todoId });
  },
  findByProjectId: function(projectId) {
    return Todos.find({ projectId: projectId });
  },
  findOneByProjectId: function(projectId) {
    return Todos.findOne({ projectId: projectId });
  },
  findByTodoChecked: function(todoChecked) {
    return Todos.find({ checked: todoChecked });
  },
  findOneByTodoChecked: function(todoChecked) {
    return Todos.findOne({ checked: todoChecked });
  }
});

TM.Todos = Todos;
