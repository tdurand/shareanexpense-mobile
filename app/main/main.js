require.config({
    //path mappings for module names not found directly under baseUrl
    paths: {
        jquery:       '../scripts/vendor/jqm/jquery-1.8.1.min',
        jqm:          '../scripts/vendor/jqm/jquery.mobile-1.1.1.min',
        underscore:   '../scripts/vendor/underscore/lodash.min',
        backbone:     '../scripts/vendor/backbone/backbone-min-amd',
        text:         '../scripts/vendor/require/text',
        jqmr :        '../scripts/vendor/jqm/jquery.mobile.router.min',
        models:       '../models',
        views:        '../views',
        templates:    '../templates'
    }

});

//1. load router.js,
define(['jquery','underscore', 'backbone','router'],function($, _, Backbone,Router) {
    $(document).ready(function() {
      console.log("DOM IS READY");// Handler for .ready() called.
    });
});

