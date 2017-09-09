var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.render()
  },

  render: function() {
  	this.collection.forEach(this.renderVideo, this);

    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  renderVideo: function(movie) {
    //new
    this.$('.video-list').append(
      new VideoListEntryView({
        model:video
      }).render().el
      )
  },


  template: templateURL('src/templates/videoList.html')

});
