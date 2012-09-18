define([
        'jquery',
        'underscore',
        'backbone',
        'views/home/home',
        'views/participant/addParticipant',
        'jqm'
        ],
	function($, _, Backbone,HomeView,AddParticipantView) {

    'use strict';
    var Router = Backbone.Router.extend({
    //define routes and mapping route to the function
        routes: {
        	'':    'index',           //home view
            'participant/#add': 'addParticipant' //dialog to add participant
        },

	    index:function(){
	    	// will render home view and navigate to homeView
	    	var homeView=new HomeView();
	    	homeView.render();
	    	this.changePage(homeView);
	    },

        addParticipant:function() {
            //
            var addParticipantView=new AddParticipantView();
            addParticipantView.render();
            this.changePage(addParticipantView);
        },

        init:true,

        //1. changePage will insert view into DOM and then call changePage to enhance and transition
        //2. for the first page, jQuery mobile will present and enhance automatically
        //3. for the other page, we will call $.mobile.changePage() to enhance page and make transition
        //4. argument 'view' is passed from event trigger
        changePage:function (view) {
        	//add the attribute 'data-role="page" ' for each view's div
    		view.$el.attr('data-role', 'page');

            //append to dom
        	$('body').append(view.$el);

            if(!this.init){
                $.mobile.changePage($(view.el), {changeHash:false});
            }else{
                this.init = false;
            }
    	}

    });

    return Router;
});




