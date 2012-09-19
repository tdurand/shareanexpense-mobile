define(['jquery', 'underscore', 'backbone',
        'models/participant/ParticipantList',
        'text!templates/participant/addParticipantViewTemplate.html'
        ],

function($, _, Backbone, ParticipantList,AddParticipantViewTemplate){

  var AddParticipantViewTemplate = Backbone.View.extend({

    el: '#addParticipant',

    //initialize template
    template:_.template(AddParticipantViewTemplate),

    //Events
    events: {
        'submit' : 'add'
    },

    add: function(e) {
        e.preventDefault();
        ParticipantList.add({
            name:this.$("#name").val(),
            amount:this.$("#amount").val(),
        });
        this.reset();
        $('.ui-dialog').dialog('close');
    },

    //render the content into div of view
    render: function(){
	  //this.el is the root element of Backbone.View. By default, it is a div.
      //$el is cached jQuery object for the view's element.
      //append the compiled template into view div container
      this.$el.html(this.template());

      //return to enable chained calls
      return this;
    },

    reset: function(){
        this.$('input').val('');
    }

  });
  return AddParticipantViewTemplate;
});




