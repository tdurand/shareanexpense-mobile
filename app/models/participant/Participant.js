define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone){

  var Participant = Backbone.Model.extend({

    defaults: {
      name: '',
      amountSpent: 0
    },
  });
  return Participant;
});




