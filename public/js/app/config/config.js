require.config({
  baseUrl: '/js/app',
  path: {
    'jquery': '../lib/jquery',
    'lodash': '../lib/lodash',
    'backbone': '../lib/backbone',
    'marionette': '../lib/marionette',
  },
  shim: {
  'underscore': {
    exports: '_'
  },
  'backbone': {
    'deps': ['underscore', 'jquery'],
    'exports': 'Backbone'
  },
  'marionette': {
    'deps': ['underscore', 'backbone', 'jquery'],
    'exports': 'Marionette'
  }
});