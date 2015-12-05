requirejs.config({
	baseUrl:"../js",
	shim : {
        	"bootstrap" : { "deps" :['jquery'] }
    	},
	paths: {
		jquery:'https://code.jquery.com/jquery-2.1.4.min',
		bootstrap:'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
		velocity: 'https://cdn.jsdelivr.net/velocity/1.2.3/velocity.min',
		velocity-ui: 'https://cdn.jsdelivr.net/velocity/1.2.3/velocity.ui.min',
		vNotifications:'vNotifications',
		
	}
});
