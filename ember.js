 App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('Photos');
});

App.Router.map(function () {
    this.route("index", {
        path: "/about"
    });
    this.route("list", {
        path: "/favs"
    });
     this.route("About", {
        path: "/about"
    });
     this.route("Todo", {
        path: "/todo"
    });
      this.route("Photos", {
        path: "/Photos"
    });
       
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('Photos');
  }
});

App.ApplicationController = Ember.Controller.extend({
    message: 'This is the application template'
});

App.IndexController = Ember.Controller.extend({
    message: 'Hello! See how index.hbs is evaluated in the context of IndexController'
});

App.PhotosRoute = Ember.Route.extend({
       model: function() {
    return [{
      title: "Tomster",
      url: "http://emberjs.com/images/about/ember-productivity-sm.png"
    }, {
      title: "Eiffel Tower",
      url: "http://emberjs.com/images/about/ember-structure-sm.png"
    }];
  }
});
    
App.AboutController = Ember.Controller.extend({
    message: 'Hello! I am an MVC programmer and excited about ember.js'
});

App.ListRoute = Ember.Route.extend({
    setupController: function (controller) {
        controller.set('content', ['angular.js', 'backbone.js', 'ember.js']);
    }
});


App.TodoRoute = Ember.Route.extend({
    setupController: function (controller) {
   controller.set('content',['Run ember.js in .net','create new to do list','deploy it in test','run in on azure','review it','more ideas for ember project']);   

    }
});
