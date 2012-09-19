define(['jquery', 'underscore', 'backbone','text!templates/result/resultViewTemplate.html'],
function($, _, Backbone, resultViewTemplate){

  var ResultView = Backbone.View.extend({

    el: '#result',

    //render the content into div of view
    render: function(){
	  //this.el is the root element of Backbone.View. By default, it is a div.
      //$el is cached jQuery object for the view's element.
      //append the compiled template into view div container
      this.$el.append(_.template(resultViewTemplate));

      //return to enable chained calls
      return this;
    }
  });
  return ResultView;
});




