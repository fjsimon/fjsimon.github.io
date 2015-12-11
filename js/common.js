requirejs.config({
	baseUrl:"../js",
	shim : {
        	"bootstrap" : { "deps" : ['jquery'] },
        	"velocity" : { "deps" : ['jquery'] },
	        "velocityui": { "deps" : ['velocity'] }, 
	        "bootgrid": ["bootstrap"],
        	"bootgridfa": ["bootgrid"],
    	},
	paths: {
		jquery:'https://code.jquery.com/jquery-2.1.4.min',
		bootstrap:'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
		velocity: 'https://cdn.jsdelivr.net/velocity/1.2.2/velocity.min',
		velocityui: 'https://cdn.jsdelivr.net/velocity/1.2.2/velocity.ui.min',
		vNotifications:'vNotifications',
		bootgrid: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-bootgrid/1.3.1/jquery.bootgrid.min',
		bootgridfa: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-bootgrid/1.3.1/jquery.bootgrid.fa.min',
	}
});
