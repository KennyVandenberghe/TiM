Template.home.onCreated = function(){

};

Template.home.helpers({
	projects: function() {
		return Projects.find();
	}
});
