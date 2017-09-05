var VideoListEntryView = Backbone.View.extend({

 initialize: function() {
    this.model.on('change', function() {
      this.render()
    }, this);

  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
