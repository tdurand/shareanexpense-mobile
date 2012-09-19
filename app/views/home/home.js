define(['jquery', 'underscore', 'backbone',
        'models/participant/ParticipantList',
        'text!templates/home/homeViewTemplate.html'],
function($, _, Backbone,ParticipantList,homeViewTemplate){

  var HomeView = Backbone.View.extend({

    el: '#index',

    initialize:function() {
        ParticipantList.on( 'all', this.render, this );
    },

    //render the content into div of view
    render: function(){
	  //this.el is the root element of Backbone.View. By default, it is a div.
      //$el is cached jQuery object for the view's element.
      //append the compiled template into view div container
      this.$el.html(_.template(homeViewTemplate,{participantList:ParticipantList}));
      $("#index").trigger('pagecreate');

      //return to enable chained calls
      return this;
    }
  });
  return HomeView;
});


