var App = require('app');

App.HomeController = Em.Controller.extend({

});


App.HomeView = Em.View.extend({
	didInsertElement:function(){
		console.log('123');
	}
});