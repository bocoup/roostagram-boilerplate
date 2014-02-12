define(function(require) {

  "use strict";

  var Backbone = require('backbone');

  var MyLayout = require('layouts/my-layout');

  // Create and instantiate our photocollection - we're going to pass this to
  // every view, but we don't want to create it every single time - just
  // when we start our application

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    routes: {
      "": "index",
    },

    insertView: function(pageView) {
      if (this.currentView) {
        this.currentView.destroy();
      }
      this.currentView = pageView;
      pageView.render().place();
    },

    index: function() {
      this.insertView(new MyLayout());
    }

  });

  return new Router();

});
