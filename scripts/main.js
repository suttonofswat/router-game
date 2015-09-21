'use strict';

var Router = Backbone.Router.extend({
	routes: {
		'loading' : 'loadingScreen',
		'menu' : 'menuScreen',
		'play': 'playScreen',
		'leaders': 'leadersScreen',
		'settings': 'settingsScreen'

	},
	loadingScreen: function(){
		$('section').hide();
		$('#loadingScreen').show();
	},
	menuScreen: function(){
		$('section').hide();
		$('#menuScreen').show();
	},
	playScreen: function(){
		$('section').hide();
		$('#playScreen').show();
	},
	leadersScreen: function(){
		$('section').hide();
		$('#leadersScreen').show();
	},
	settingsScreen: function(){
		$('section').hide();
		$('#settingsScreen').show();
	}


});

var page = new Router();
Backbone.history.start();


window.onload =function(){
		page.navigate('loading', {trigger: true});
	window.setTimeout(function(){
		page.navigate('menu', {trigger:true})
	}, 3000);

}




