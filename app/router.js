var App = require('app');


App.IndexRoute = Em.Route.extend({
    redirect:function(){
        this.transitionTo('home');
    }
});

App.Router.map(function(){
    this.route('index',{path:'/'});
    this.route('home');
});