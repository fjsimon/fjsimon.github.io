define(['jquery', 'velocity'], function($){
	

(function($) {
	(function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
    })(navigator.userAgent || navigator.vendor || window.opera);
    ! function(a, b) {
        var c, d, e, f = "._tap",
            g = "._tapActive",
            h = "tap",
            i = "clientX clientY screenX screenY pageX pageY".split(" "),
            j = {
                count: 0,
                event: 0
            },
            k = function(a, c) {
                var d = c.originalEvent,
                    e = b.Event(d);
                e.type = a;
                for (var f = 0, g = i.length; g > f; f++) {
                    e[i[f]] = c[i[f]];
                }
                return e;
            },
            l = function(a) {
                if (a.isTrigger) {
                    return !1;
                }
                var c = j.event,
                    d = Math.abs(a.pageX - c.pageX),
                    e = Math.abs(a.pageY - c.pageY),
                    f = Math.max(d, e);
                return a.timeStamp - c.timeStamp < b.tap.TIME_DELTA && f < b.tap.POSITION_DELTA && (!c.touches || 1 === j.count) && o.isTracking;
            },
            m = function(a) {
                if (!e) {
                    return !1;
                }
                var c = Math.abs(a.pageX - e.pageX),
                    d = Math.abs(a.pageY - e.pageY),
                    f = Math.max(c, d);
                return Math.abs(a.timeStamp - e.timeStamp) < 750 && f < b.tap.POSITION_DELTA;
            },
            n = function(a) {
                if (0 === a.type.indexOf("touch")) {
                    a.touches = a.originalEvent.changedTouches;
                    for (var b = a.touches[0], c = 0, d = i.length; d > c; c++) {
                        a[i[c]] = b[i[c]];
                    }
                }
                a.timeStamp = Date.now ? Date.now() : +new Date();
            },
            o = {
                isEnabled: !1,
                isTracking: !1,
                enable: function() {
                    o.isEnabled || (o.isEnabled = !0, c = b(a.body).on("touchstart" + f, o.onStart).on("mousedown" + f, o.onStart).on("click" + f, o.onClick));
                },
                disable: function() {
                    o.isEnabled && (o.isEnabled = !1, c.off(f));
                },
                onStart: function(a) {
                    a.isTrigger || (n(a), (!b.tap.LEFT_BUTTON_ONLY || a.touches || 1 === a.which) && (a.touches && (j.count = a.touches.length), o.isTracking || (a.touches || !m(a)) && (o.isTracking = !0, j.event = a, a.touches ? (e = a, c.on("touchend" + f + g, o.onEnd).on("touchcancel" + f + g, o.onCancel)) : c.on("mouseup" + f + g, o.onEnd))));
                },
                onEnd: function(a) {
                    var c;
                    a.isTrigger || (n(a), l(a) && (c = k(h, a), d = c, b(j.event.target).trigger(c)), o.onCancel(a));
                },
                onCancel: function(a) {
                    a && "touchcancel" === a.type && a.preventDefault(), o.isTracking = !1, c.off(g);
                },
                onClick: function(a) {
                    return !a.isTrigger && d && d.isDefaultPrevented() && d.target === a.target && d.pageX === a.pageX && d.pageY === a.pageY && a.timeStamp - d.timeStamp < 750 ? (d = null, !1) : void 0;
                }
            };
        b(a).ready(o.enable), b.tap = {
            POSITION_DELTA: 10,
            TIME_DELTA: 400,
            LEFT_BUTTON_ONLY: !0
        };
    }(document, jQuery);
    
    
    // Adding special ease effect to velocity.js
    var VelocityContainer = window.Velocity || $.Velocity;
    $.extend(VelocityContainer.Easings, {
        Back: function( p ) {
            return p * p * ( 3 * p - 2 );
        },
        Bounce: function ( p ) {
            var pow2,
                bounce = 4;
            while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
            return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
        }
    });
    
    $.each([ "Back", "Bounce" ], function( index, easeInName ) {
        var easeIn = VelocityContainer.Easings[easeInName];
        VelocityContainer.Easings[ "easeIn" + easeInName ] = easeIn;
        VelocityContainer.Easings[ "easeOut" + easeInName ] = function( p ) {
            return 1 - easeIn( 1 - p );
        };
        VelocityContainer.Easings[ "easeInOut" + easeInName ] = function( p ) {
            return p < 0.5 ?
                easeIn( p * 2 ) / 2 :
                1 - easeIn( p * -2 + 2 ) / 2;
        };
    });
    
    $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    var sb = 0;
	var bb = 0;
	var MsgTimer;
	var SidePanelTimer;
	var SpecialLoadingTimer;
	var SpecialIdx = 0;
	var CurrentLoading = 0;
	var ResizeTimer;

	$(document).ready(function() {
	    var NewContent;
	    NewContent = '<div id="mnSBcontainerTR" align="right"></div>';
	    NewContent += '<div id="mnSBcontainerTL"></div>';
	    NewContent += '<div id="mnSBcontainerBL"></div>';
	    NewContent += '<div id="mnSBcontainerBR" align="right"></div>';
	    
	    NewContent += '<div id="mbBbTabContainer"></div>';
	    NewContent += '<div id="mnBigBoxContainerBR"></div>';
	    NewContent += '<div id="mnBigBoxContainerBL"></div>';
	    
	    NewContent += '<span id="mnLetterCounter"></span>';
	
	    $("body").append(NewContent);

        $("body").on("mouseenter", ".mnSbButtonSection button", function() {
            var Color = $(this).attr("data-hover");
            var bot = $(this);
            bot.velocity({backgroundColor: Color,}, {duration: 400,});
        });
        
        $("body").on("mouseleave", ".mnSbButtonSection button", function() {
            var Color = $(this).attr("data-leave");
            var bot = $(this);
            bot.velocity({backgroundColor: Color,}, {duration: 400,});
        });
        
        $("body").on("tap", ".mnSmallBox", function() {
            var CloseOnClick = $(this).attr("data-closeclick");
            if (CloseOnClick === "true") {
                $(this).find(".sbClose").click();
                DestroySmallBox($(this));
            }
        });
        
        $("body").on("mouseenter", ".mnSmallBox", function() {
            $(this).attr("data-mouseover", "true");
        });
        
        $("body").on("mouseleave", ".mnSmallBox", function() {
            $(this).removeAttr("data-mouseover");
        });
        
	    $(window).on("resize", function() {
	        clearInterval(ResizeTimer);
	        ResizeTimer = setTimeout(function() {
	            $(".mnSmallBox").each(function() {
	                CheckSpaceSB($(this));
	            });
//	            $(".mnBigBox").each(function() {
//	                CheckSpaceBB($(this))
//	            });
//	            $(".mnSidePanel").each(function() {
//	                CheckSpaceSP($(this))
//	            })
	        }, 300);
	    });
	});

	function DestroySmallBox(SmallBox, nuke) {
	    var Position = SmallBox.attr("data-position") * 1;
	    var MouseOver = SmallBox.attr("data-mouseover");
	    var CloseOnClick = SmallBox.attr("data-closeclick");
	    var BlockPage = SmallBox.attr("data-blockpage");
	    var Overlay = $("#overlay");
	    
	    if (nuke === undefined) {
	        if (MouseOver !== undefined && CloseOnClick == "false") {
	            SmallBox.bind("mouseleave", function() {
	                $(this).removeAttr("data-mouseover");
	                $(this).unbind("mouseleave");
	                DestroySmallBox($(this));
	            });
	            return false;
	        }
	    }

	    switch (Position) {
	         case 1:
	        	 SmallBox.velocity({opacity: 0,}, {duration: 400,})
	        		.velocity({left: "+=150px",}, {duration: 800, easing: "easeOutBounce",})
	        		.velocity({height: "0px", marginBottom: "0px"}, {duration: 1000, easing: "easeOutBounce",});
	             break;
	         case 2:
	        	 SmallBox.velocity({opacity: 0,}, {duration: 400,})
	        	 	.velocity({right: "+=150px",}, {duration: 800, easing: "easeOutBounce",})
	        		.velocity({height: "0px", marginBottom: "0px"}, {duration: 1000, easing: "easeOutBounce",});
	        	 break;
	         case 3:
	        	 SmallBox.velocity({opacity: 0,}, {duration: 400,})
	        	 	.velocity({right: "+=150px",}, {duration: 800, easing: "easeOutBounce",})
        			.velocity({height: "0px", marginBottom: "0px"}, {duration: 1000, easing: "easeOutBounce",});
	        	 break;
	         case 4:
	        	 SmallBox.velocity({opacity: 0,}, {duration: 400,})
	        	 	.velocity({left: "+=150px",}, {duration: 800, easing: "easeOutBounce",})
	        		.velocity({height: "0px", marginBottom: "0px"}, {duration: 1000, easing: "easeOutBounce",});
	             break;
	     }
	    
	    if(BlockPage === "true"){
	    	document.body.style.overflow = "visible";
            Overlay.remove();
	    }
	    
	    setTimeout(function() {
	        SmallBox.remove();
	    }, 1800);            
	}

	function CheckSpaceSB(SmallBox) {
	    var WindowWidth = $(document).width();
	    var SmallBoxWidth = SmallBox.width();
	    var SmallBoxOriginalWidth = eval(SmallBox.attr("data-width"));
	    if (WindowWidth <= (SmallBoxWidth + 5)) {
	        SmallBox.css("width", (WindowWidth - 5) + "px");
	    } else {
	        if (WindowWidth >= (SmallBoxOriginalWidth + 5)) {
	        	SmallBox.velocity({width: SmallBoxOriginalWidth,}, {duration: 300,});
	            // TweenLite.to(SmallBox, 0.3, {width: SmallBoxOriginalWidth})
	        } else {
	        	SmallBox.velocity({width: (WindowWidth - 5),}, {duration: 300,});
	            // TweenLite.to(SmallBox, 0.3, {width: (WindowWidth - 5)})
	        }
	    }
	    if (WindowWidth < 700) {
	        $("#mnSBcontainerTL .mnSmallBox").each(function() {
	            $(this).appendTo($("#mnSBcontainerTR"));
	        });
	        $("#mnSBcontainerBL .mnSmallBox").each(function() {
	            $(this).appendTo($("#mnSBcontainerBR"));
	        });
	        // $(".mnSidePanel").each(function() {
	        //     CheckSpaceSP(MetroSidePanel)
	        // })
	    }
	}
    

	$.vSBox = function(settings, callback) {
		settings = $.extend({
			position: 1,
			title: undefined,
			content: "",
			width: 350,
			img: undefined,
			icon: undefined,
			fa: undefined,
			color: "#6D1D99",
			timeout: undefined,
			colortime: 1000,
			delay: 0,
			colors: [],
			closeonclick: true,
			buttons: [],
			buttonhover: "#3E006E",
			blockpage: false,
			backgroundcolor: "#B0C4DE",
			backgroundcontent: "#232323",
			opacity: 0.5,
	
		}, settings);
		var Content = "";
		var WindowWidth = $(document).width();
		sb += 1;
		if (WindowWidth < 700) {
			settings.sound = false;
	        if (settings.position == 2) {
	            settings.position = 1;
	        } else {
	            if (settings.position == 3) {
	                settings.position = 4;
	            }
	        }
	    }
	
	    if(settings.colors.length > 0){
	    	settings.color = settings.colors[0];
	    }
	
	    if(settings.buttons.length > 0){
	    	settings.closeonclick = false;
	    }
	    
	    if(settings.blockpage) {
	    	document.body.style.overflow = "hidden";
		    Content = "<div id='overlay' class='overlay' style='background-color:" + 
		    	settings.backgroundcolor + "'></div>";
		    $("body").append(Content);
		    
		    var Overlay = $("#overlay");   
		    Overlay.velocity({ opacity: settings.opacity, }, { duration: 400, });
		    
	    }
	
	    Content = "<div id='sb"+ sb +"' class='mnSmallBox' style='width:" + 
	    	settings.width + "px; background-color:" + 
	    	settings.color + ";' align='left'>";
	    Content += "<i class='sbClose'></i><table>";
	    Content += "<tr>";
	    
	    if (settings.img !== undefined) {
	    	Content += "<td class='mnSbMainImage'>";
	    	Content += "<img src='" + settings.img + "'>";
	    	Content += "</td>";
	    }
	
        Content += "<td class='mnSbContent'>";
        if (settings.title !== undefined) {
            Content += "<span class='mnSbTitle'>" + settings.title + "</span>";
        }
        Content += "<span class='mnSbContent'>" + settings.content + "</span>";
        Content += "</td>";
        
	    if (settings.buttons.length > 0) {
	    	Content += "<td class='mnSbButtonSection'>";
	    	for ( var i = 0; i <= settings.buttons.length - 1; i++) {
	    		Content += "<button data-leave='" + settings.color +"' data-hover='" + 
	    			settings.buttonhover + "' style='background-color:" + 
	    			settings.color + "'> " + settings.buttons[i] + "</button>";
	    	}
	    	Content += "</td>";
	    } else {
	    	if(settings.icon !== undefined || settings.fa !== undefined) {
	    		Content += "<td>";
	    		Content += "<div class='mnSbIcon' align='center'>";
	    		if(settings.icon !== undefined) {
	    			Content += "<img src='" + settings.icon +"'>";
	    		} else {
	    			Content += "<i class='fa " + settings.fa + "'></i>";
	    		}
	    		Content += "</div>";
	    		Content += "</td>";
	    	}
	    }
	    Content += "</tr>";
	    Content += "</table>";
	    Content += "</div>";
	    switch (settings.position) {
	    	case 1: 
	    		$("#mnSBcontainerTR").append(Content);
	    		break;
	        case 2:
	            $("#mnSBcontainerTL").append(Content);
	            break;
	        case 3:
	            $("#mnSBcontainerBL").prepend(Content);
	            break;
	        case 4:
	            $("#mnSBcontainerBR").prepend(Content);
	            break;
	        default:
	            $("#mnSBcontainerTR").append(Content);
	            settings.position = 1;
	            break;	
	    }
	    
		var SmallBox = $("#sb" + sb);    
		SmallBox.attr("data-closeclick", settings.closeonclick)
				.attr("data-position", settings.position)
				.attr("data-width", settings.width)
				.attr("data-blockpage", settings.blockpage);
		
		CheckSpaceSB(SmallBox);
	
        switch (settings.position) {
        	case 1:
        		SmallBox.css("left", "50px");
        		SmallBox.velocity({ opacity: 1, }, { duration: 400, delay: settings.delay, })
        			.velocity({ left: "0px", }, { duration: 800, easing: "easeOutBounce", });
	            break;
	         case 2:
        		SmallBox.css("right", "50px");
        		SmallBox.velocity({ opacity: 1, }, { duration: 400, delay: settings.delay, })
        			.velocity({ right: "0px", }, { duration: 800, easing: "easeOutBounce", });
        		break;
        	case 3:
        		SmallBox.css("right", "50px");
        		SmallBox.velocity({ opacity: 1, }, { duration: 400, delay: settings.delay, })
        			.velocity({ right: "0px", }, { duration: 800, easing: "easeOutBounce", });
        		break;
	         case 4:
        		SmallBox.css("left", "50px");
        		SmallBox.velocity({ opacity: 1, }, { duration: 400, delay: settings.delay, })
        			.velocity({ left: "0px", }, { duration: 800, easing: "easeOutBounce", });
	            break;
	     }
	
	 	if(settings.colors.length > 0) {
	 		setInterval(function() {
	            if (SmallBox.attr("data-indexcolor") === undefined) {
	                SmallBox.attr("data-indexcolor", "0");
	            }
	            var ColorIdx = SmallBox.attr("data-indexcolor") * 1;
	            if (ColorIdx >= settings.colors.length - 1) {
	                ColorIdx = 0;
	            } else {
	                ColorIdx += 1;
	            }
	            var NextColor = settings.colors[ColorIdx];
	            
	            // tl.to(SmallBox, 0.8, {
	            //     backgroundColor: NextColor
	            // });
	            SmallBox.attr("data-indexcolor", ColorIdx);
	        }, settings.colortime);
	 	}
	    if (settings.timeout !== undefined) {
	        setTimeout(function() {
	            if (typeof callback == "function") {
	                if (callback) {
	                    callback("timeoutReach");
	                }
	            }
	            DestroySmallBox(SmallBox);
	        }, settings.timeout);
	    }
	    SmallBox.find(".sbClose").bind("click", function() {
	        if (typeof callback == "function") {
	            if (callback) {
	                callback("touchClose");
	            }
	        }
	    });
	    if (settings.buttons.length > 0) {
	        SmallBox.find(".mnSbButtonSection button").bind("tap", function() {
	            $(this).unbind("tap");
	            var ButtonText = $(this).text();
	            if (typeof callback == "function") {
	                if (callback) {
	                    callback("buttonPress", ButtonText);
	                }
	            }
	            DestroySmallBox(SmallBox, true);
	        });
	    }
	};

})(jQuery);

});
