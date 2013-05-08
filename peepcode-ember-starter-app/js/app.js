// boots Ember, sets up the models, views, controllers
var App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.resource('tables');
});

// Routes load data, not controllers
App.TablesRoute = Ember.Route.extend({
  model: function() {
    return App.Table.find();
  }
});

App.TablesController = Ember.ArrayController.extend();


//  Models
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'  //loads data locally
});

App.Table = DS.Model.extend();
App.Table.FIXTURES = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
];


