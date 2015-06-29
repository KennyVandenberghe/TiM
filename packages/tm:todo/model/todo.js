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

});

TM.Todos = Todos;
