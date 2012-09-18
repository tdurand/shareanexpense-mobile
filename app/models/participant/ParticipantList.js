define(['jquery', 'underscore', 'backbone','models/participant/Participant'],
function($, _, Backbone,Participant){

  var ParticipantList = Backbone.Collection.extend({

    model:Participant



  });
  return ParticipantList;
});




