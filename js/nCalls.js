define(['jquery', 'bootstrap', 'velocity', 'vNotifications'], function($){

	$(document).ready(function() {
		
		$( document ).on( "click", "#success", function(e) {
			e.preventDefault();
			$.vSBox({
				title: "Success Notification",
				content: "This is a success notification.",
				buttonhover: "#0484ba",
				color: "rgb(28, 184, 65)",
				timeout: "3000",
				fa: "fa-check-circle-o",
				blockpage: false,
			});
		});
		
 		$( document ).on( "click", "#notice", function(e) {
			e.preventDefault();
			$.vSBox({
				title: "Notice Notification",
				content: "This is a notice notification.",
				buttonhover: "#0484ba",
				color: "rgb(66, 184, 221)",
				fa: "fa-exclamation-circle",
			});
		});
		
		$( document ).on( "click", "#warning", function(e) {
			e.preventDefault();
			$.vSBox({
				title: "Warning Notification",
				content: "This is a warning notification.",
				buttonhover: "#0484ba",
				color: "rgb(223, 117, 20)",
				fa: "fa-exclamation-triangle",
			});
		});
		
		$( document ).on( "click", "#error", function(e) {
			e.preventDefault();
			$.vSBox({
				title: "Error Notification",
				content: "This is a error notification.",
				buttonhover: "#0484ba",
				color: "rgb(202, 60, 60)",
				fa: "fa-times-circle",
			});
		});
		
		$( document ).on( "click", "#customNotification", function(e) {
			e.preventDefault();
			$.vSBox({
				title: "Images!",
				width: 310,
				content: "200x200px for a HD image!",
				color: "#8165a2",
				img: "/EtOpere/resources/images/success200.png",
				fa: "fa-check",
			});
		});
		
		$( document ).on( "click", "#confirmation", function(e) {
			e.preventDefault();
			$.vSBox({
				position:1,
				title: "Confirmation",
				content: "Do you want to delete the following record(s)?",
				buttons:["Delete","Cancel"],
				buttonhover: "#0484ba",
				color: "#009bdb",
				blockpage: true,
			},function(action, buttonText){
				alert("action: "+ action + ", button text: "+ buttonText);
			});
		});
		
		$( document ).on( "click", "#confirmation2", function(e) {
			e.preventDefault();
			$.vBBox({
				position: 1,
				title: "Confirmation",
				content: "Do you want to delete the following record(s)?",
				width: 310,
				fa: "fa-question-circle",
				sound: false,
				buttonhover: "#0484ba",
				color: "#009bdb",
				buttons: ["Delete","Cancel"]
			},function(action, buttonPress){
				alert("action: "+ action + "  Clicked button: " + buttonPress);
			});
		});
	
		$( document ).on( "tap", "#loading", function() {
		    $.vLoading({
		        title:"Loading...",
		        content:"Please do not refresh the page",
		      	fa: "fa-spinner",
		        backgroundcolor: "#EEE",
		        backgroundcontent: "#777777",
		        // colors: ["#208AAF","#C53FDF", "#6D1D99"],
		        timeout: 6000,
		        opacity:0.7,
		    });
		});
		
		$( document ).on( "tap", "#panel", function() {
			$.metroSidePanel({
				// position: 1
				title: "Info panel",
				content: "You know, this can help you to show everything you want." +
							"<br/><br/>Even iFrames with cache!",
				backgroundcontent: "#1B7CBD",
				fa: "fa-pagelines",
			});
		});
		
		$( document ).on( "click", "#notification1", function() {
			$.metroMessageBox({
				title: "Did you like it?",
				content: "You now, all this features are almost for free! ( $5 )",
				buttons: ["Yes, I want to buy it now!","No, I want more"],
				icons: ["fa-thumbs-o-up", "fa-times"],
				sound: false,
				activebutton:"#139B80",
			},function(action, buttonPress){
				alert("action: "+ action + "  ButtonPress: " + buttonPress);
				if(buttonPress == "Yes, I want to buy it now!"){
					window.location = "http://www.google.co.uk";
				}
			});
		});
		
		$( document ).on( "click", "#notification2", function() {
			$.metroMessageBox({
				title: "Is getting better!",
				content: "Metro MessageBox is getting bigger and Stronger!",
				buttons: ["Button 1","Button 2","Button 3","Button 4"],
				// defaultbutton: 1,
				icons: ["fa-paper-plane-o"],
				sound: false,
				activebutton:"#139B80",
			});
		});

	});
});
