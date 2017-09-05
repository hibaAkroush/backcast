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
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },


  template: templateURL('src/templates/videoList.html')

});
