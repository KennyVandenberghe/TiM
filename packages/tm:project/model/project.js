Projects = new Mongo.Collection('projects', {

});

Projects.timestampable();

Projects.allow(TM.Model.defaultAllow);

TM.registerNamespace('project', Projects);

CollectionBehaviours.extendCollectionInstance(Projects);

TM.Model.Project = {

};

Projects.helpers(TM.Model.Project);

_.extend(Projects, {

});

TM.Projects = Projects;
