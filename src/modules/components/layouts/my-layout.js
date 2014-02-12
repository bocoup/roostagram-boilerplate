define(function(require) {

  var BaseView = require("core/base-view");
  var template = require("tmpl!src/modules/components/layouts/my-layout");

  var MyLayoutView = BaseView.extend({

    template: template

  });

  return MyLayoutView;

});