import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("preingest", function() {
  	this.route('index', { path: "/" });
  	this.route('show', { path: "/:id" });
  	this.route('create', { path: "/create" });
  });

  this.resource("editor", { path: "/editor"}, function() {
      this.resource('files', { path: "/files/:id" });
      this.resource('metadata', { path: "/metadata/:id" });
      // this.resource('rise', { path: "/rise/:id" });
      // this.resource('ifcreconstruction', { path: "/ifcreconstruction/:id" });
      // this.resource('differenedetection', { path: "/differencedetection/:id" });
  });

  this.route("search");

  this.route("semenhance");

  this.resource("preservation", function() {
    this.route('index', { path: "/" });
  });
});

export default Router;
