require.config({
    //path mappings for module names not found directly under baseUrl
    paths: {
        jquery:     'vendor/jqm/jquery-1.8.1.min',
        jqm:     'vendor/jqm/jquery.mobile-1.1.1.min',
        underscore: 'vendor/underscore/lodash.min',
        backbone:   'vendor/backbone/backbone-min-amd',
        text:       'vendor/require/text',
        modules:    '../modules'
    }

});

//1. load app.js,
//2. configure jquery mobile to prevent default JQM ajax navigation
//3. bootstrapping application
define(['app','jqm-config'], function(app) {
    $(document).ready(function() {
      console.log("DOM IS READY");// Handler for .ready() called.
    });
    app.initialize();
});


