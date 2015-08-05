Projects = new Mongo.Collection('projects', {

});

Projects.timestampable();

Projects.allow(TM.Model.defaultAllow);

TM.registerNamespace('project', Projects);

CollectionBehaviours.extendCollectionInstance(Projects);

TM.Model.Project = {
  getNbTodos: function() {
    return Todos.find({projectId: this._id}).count();
  }
};

Projects.helpers(TM.Model.Project);

_.extend(Projects, {
  findById: function(projectId) {
    return Projects.find({ _id: projectId });
  },
  findOneById: function(projectId) {
    return Projects.findOne({ _id: projectId });
  },
  findByProjectStatus: function(projectStatus) {
    return Projects.find({ open: projectStatus });
  },
  findOneByProjectStatus: function(projectStatus) {
    return Projects.findOne({ open: projectStatus });
  }
});

TM.Projects = Projects;
