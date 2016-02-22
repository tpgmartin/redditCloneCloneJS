define(['backbone', 'marionette'],
  function (Backbone, Marionette) {
    var App = new Backbone.Marionette.Application();
    
    App.user = window.redditUser || false;
    
  return App;  
});