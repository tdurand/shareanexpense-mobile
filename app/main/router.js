define([
        'jquery',
        'underscore',
        'backbone',
        'jqmr',
        'views/home/home',
        'views/participant/addParticipant',
        'jqm'
        ],
	function($, _, Backbone,jqmr,HomeView,AddParticipantView) {
        var Router=new $.mobile.Router({
        "/index":   { handler: 'index', events: "bc" },
        "/participant/add":   { handler: 'addParticipant', events: "bc" },
      }, {
        index:function(){
            console.log("index");
            // will render home view and navigate to homeView
            var homeView=new HomeView();
            homeView.render();
        },

        addParticipant:function() {
            console.log("add participant");
            var addParticipantView=new AddParticipantView();
            addParticipantView.render();
        },

        default: function(){
          console.log('No route found.');
        }
      }, {
        ajaxApp: true,
        defaultHandler: 'default'
      });

      return Router;
});


            // this._participantList=new ParticipantList();






