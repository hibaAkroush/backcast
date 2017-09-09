var VideoPlayerView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection , 'select', this.selectVideo(video))
	},

	selectVideo: function(video){
		this.model: video
		render()
	}

	render: function() {
    //this.$el.html('<div class="loading">Please wait...</div>');
    //new
     this.$el.html(this.template(this.model.attributes));

    return this;
    },

    template: templateURL('src/templates/videoPlayer.html')

    });
