define(['jquery', 'velocity','velocityui'], function($, velocity){
	
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
	    NewContent =  '<div id="mnSBcontainerTR" align="right"></div>';
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
        
        $("html").on("tap", function() {
            if ($(".mnSidePanel").length > 0) {
                $(".mnSidePanel").each(function() {
                    var MetroSidePanel = $(this);
                    var isOver = $(this).attr("data-mouseover");
                    if (isOver == "false") {
                        DestroySidePanel(MetroSidePanel);
                    }
                });
            }
        });
        
        $("body").on("tap", ".mnSidePanel", function(event) {
            event.stopPropagation();
        });
        
	    $(window).on("resize", function() {
	        clearInterval(ResizeTimer);
	        ResizeTimer = setTimeout(function() {
	            $(".mnSmallBox").each(function() {
	                CheckSpaceSB($(this));
	            });
	            $(".mnBigBox").each(function() {
	                CheckSpaceBB($(this));
	            });
	            $(".mnSidePanel").each(function() {
	                CheckSpaceSP($(this));
	            });
	        }, 300);
	    });
	});

    $.smallBoxKill = function() {
        $(".mnSmallBox").each(function() {
            DestroySmallBox($(this));
        });
    };
    
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
	        } else {
	        	SmallBox.velocity({width: (WindowWidth - 5),}, {duration: 300,});
	        }
	    }
	    if (WindowWidth < 700) {
	        $("#mnSBcontainerTL .mnSmallBox").each(function() {
	            $(this).appendTo($("#mnSBcontainerTR"));
	        });
	        $("#mnSBcontainerBL .mnSmallBox").each(function() {
	            $(this).appendTo($("#mnSBcontainerBR"));
	        });
	        $(".mnSidePanel").each(function() {
	        	CheckSpaceSP(MetroSidePanel);
	        });
	    }
	}
    
	/******************************** SMALL BOX ************************************************/

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

	/******************************** BIG BOX ************************************************/
	
    $.vBBox = function(settings, callback) {
        settings = $.extend({
            position: 1,
            title: undefined,
            content: "",
            width: 350,
            img: undefined,
            fa: "fa-star",
            sound: true,
            soundpath: "static/sound/",
            color: "#6D1D99",
            timeout: undefined,
            colortime: 1000,
            delay: 0,
            colors: [],
            closeicon: true,
            tabicon: true,
            buttons: [],
            buttonhover: "#3E006E",
            number: undefined,
        }, settings);
        var Content = "";
        bb += 1;
        HideAllBigBoxes();
        if ($.browser.mobile) {
            settings.sound = false;
            if (settings.position === 2) {
                settings.position = 1;
            }
        }
        if (settings.sound) {
            PlaySound(settings.soundpath, "bigbox");
        }
        if (settings.colors.length > 0) {
            settings.color = settings.colors[0];
        }
        if (settings.buttons.length > 0) {
            settings.closeicon = false;
        }
        Content += "<div id='bb" + bb + "' class='mnBigBox' style='background-color:" + 
        	settings.color + "; width:" + settings.width + "px;' data-bbtab='#bbt" + bb + "'>";
        Content += "<i class='bbClose'></i>";
        Content += "<table>";
        Content += "<tr>";
        Content += "<td>";
        if (settings.title !== undefined) {
            Content += "<span class='mnBbTitle'>" + settings.title + "</span>";
        }
        if (settings.closeicon) {
            Content += "<i data-closebigbox='#bb" + bb + "' class='mnBbClose fa fa-times fa-2x'></i>";
        }
        Content += "<span class='mnBbContent'>";
        Content += settings.content;
        Content += "</span>";
        Content += "</td>";
        Content += "</tr>";
        if (settings.buttons.length === 0) {
            Content += " <tr>";
            Content += " <td class='mnBbIconSection'>";
            if (settings.img !== undefined) {
                Content += "<img src='" + settings.img + "' class='mnBbIconImg'>";
            } else {
                Content += "<i class='fa " + settings.fa + "'></i>";
            }
            if (settings.number !== undefined) {
                Content += "<span class='mnBbIndicator'>" + settings.number + "</span>";
            }
            Content += "</td>";
            Content += "</tr>";
        } else {
            Content += " <tr>";
            Content += " <td class='mnBbIconSection'>";
            for (var i = 0; i <= settings.buttons.length - 1; i++) {
                Content += "<button style='background-color:" + settings.color + ";' data-hovercolor='" +
                		settings.buttonhover + "' data-normalcolor='" + settings.color + "' >" +
                		settings.buttons[i] + "</button>";
            }
            Content += "</td>";
            Content += "</tr>";
            Content += "</table>";
        }
        Content += "</div>";
        var TabContent = "";
        if (settings.tabicon) {
            TabContent += '<div id="bbt' + bb + '" class="mnBbTab" align="center" style="background-color:' +
            		settings.color + '" data-bigbox="#bb' + bb + '">';
            if (settings.img === undefined) {
                if (settings.fa === undefined) {
                    TabContent += '<i class="fa fa-star-o"></i>';
                } else {
                    TabContent += '<i class="fa ' + settings.fa + '"></i>';
                }
            } else {
                TabContent += '<img src="' + settings.img + '">';
            }
            TabContent += "</div>";
            $("#mbBbTabContainer").append(TabContent);
            var bbTab = $("#bbt" + bb);
            bbTab.css("left", "50px");      
            bbTab.velocity({ opacity: 1, }, { duration: 500, delay: settings.delay + 0.5, })
				.velocity({ left: "0px", }, { duration: 800, easing: "easeOutBounce", });
            
//            tl.to(bbTab, 0.5, {
//                autoAlpha: 1,
//                delay: (settings.delay + 0.5)
//            }).to(bbTab, 0.8, {
//                left: "0px",
//                ease: Bounce.easeOut
//            }, "-=0.5")
        }
        
        if (settings.position === 1) {
            $("#mnBigBoxContainerBR").append(Content);
        } else {
            $("#mnBigBoxContainerBL").append(Content);
        }
        
        var BigBox = $("#bb" + bb);
        BigBox.attr("data-width", settings.width);
        CheckSpaceBB(BigBox);
        BigBox.css("bottom", "50px");
        BigBox.velocity({ opacity: 1, }, { duration: 500, delay: settings.delay, })
			.velocity({ bottom: "0px", }, { duration: 800, easing: "easeOutBounce", });
        
//        if (settings.colors.length > 0) {
//            setInterval(function() {
//                if (BigBox.attr("data-indexcolor") === undefined) {
//                    BigBox.attr("data-indexcolor", "0")
//                }
//                var bbTab = $(BigBox.attr("data-bbtab"));
//                var ColorIdx = BigBox.attr("data-indexcolor") * 1;
//                if (ColorIdx >= settings.colors.length - 1) {
//                    ColorIdx = 0;
//                } else {
//                    ColorIdx += 1;
//                }
//                var NextColor = settings.colors[ColorIdx];
//                tl.to(BigBox, 0.8, {
//                    backgroundColor: NextColor
//                }).to(bbTab, 0.8, {
//                    backgroundColor: NextColor
//                }, "-=0.8");
//                BigBox.attr("data-indexcolor", ColorIdx)
//            }, settings.colortime)
//        }
        
        if (settings.timeout !== undefined) {
            setTimeout(function() {
                if (typeof callback == "function") {
                    if (callback) {
                        callback("timeoutReach");
                    }
                }
                DestroyBigBox(BigBox);
            }, settings.timeout);
        }
        BigBox.find(".bbClose").bind("click", function() {
            if (typeof callback == "function") {
                if (callback) {
                    callback("closeIconTouch");
                }
            }
        });
        if (settings.buttons.length > 0) {
            BigBox.find(".mnBbIconSection button").bind("tap", function() {
                $(this).unbind("tap");
                var ButtonText = $(this).text();
                if (typeof callback === "function") {
                    if (callback) {
                        callback("buttonPress", ButtonText);
                    }
                }
                DestroyBigBox(BigBox, true);
                setTimeout(function() {
                    if ($(".mnBigBox").length - 1 >= 0) {
                    	var BigBoxNext = $(".mnBigBox:last");
                        BigBoxNext.velocity({ opacity: 1, }, { duration: 300,});
                    }
                }, 405);
            });
        }
    };
	
    function DestroyBigBox(BigBox, nuke) {
        var bbTab = $(BigBox.attr("data-bbtab"));
        var MouseOver = BigBox.attr("data-mouseover");
        if (nuke === undefined) {
            if (MouseOver !== undefined) {
                BigBox.bind("mouseleave", function() {
                    $(this).removeAttr("data-mouseover");
                    $(this).unbind("mouseleave");
                    DestroyBigBox($(this));
                });
                return false;
            }
        }
        
        BigBox.velocity({ opacity: 0, }, { duration: 400, })
			.velocity({ bottom: "-=150", }, { duration: 1000, easing: "easeOutBounce", });
        
        bbTab.velocity({ left: "+=100", }, { duration: 1000, easing: "easeOutBounce", })
			.velocity({ height: "0px", marginBottom: "0px", paddingTop: "5px"}, 
					{ duration: 1000, easing: "easeOutBounce", });
        
//        var tl = new TimelineLite();
//        tl.to(BigBox, 0.4, {
//            autoAlpha: 0
//        }).to(BigBox, 1, {
//            bottom: "-=150",
//            ease: Bounce.easeOut
//        }, "-=0.4").to(bbTab, 1, {
//            left: "+=100",
//            ease: Bounce.easeOut
//        }, "-=1").to(bbTab, 1, {
//            height: "0px",
//            marginBottom: "0px",
//            paddingTop: "5px",
//            ease: Bounce.easeOut
//        }, "-=0.5");
        
        setTimeout(function() {
            bbTab.slideUp();
        }, 100);
        setTimeout(function() {
            BigBox.remove();
            bbTab.remove();
        }, 400);
    }

    function HideAllBigBoxes() {
        $(".mnBigBox").each(function() {
            var BigBox = $(this);
            BigBox.velocity({ opacity: 0, }, { duration: 500, });
        });
    }
    
    function CheckSpaceBB(BigBox) {
        var WindowWidth = $(document).width();
        var BigBoxWidth = BigBox.width();
        var BigBoxOriginalWidth = eval(BigBox.attr("data-width"));
        if (WindowWidth <= (BigBoxWidth + 18)) {
            BigBox.css("width", (WindowWidth - 18) + "px");
        } else {
            if (WindowWidth >= (BigBoxOriginalWidth + 18)) {
                BigBox.velocity({ width: BigBoxOriginalWidth, }, { duration: 300, });
            } else {
            	BigBox.velocity({ width: (WindowWidth - 18), }, { duration: 300, });
            }
        }
    }
    
	/******************************** LOADING ************************************************/
    var ml = 0;
    var LoadingArray;
    $.vLoading = function(settings, callback) {
        var Content = "";
        settings = $.extend({
            title: undefined,
            content: undefined,
            fa: undefined,
            blockpage: true,
            timeout: undefined,
            texts: [],
            backgroundcolor: "#000000",
            backgroundcontent: "#232323",
            opacity: 0.7,
            colortime: 1500,
            colors: [],
        }, settings);
        ml += 1;
        CurrentLoading = 1;
        clearInterval(SpecialLoadingTimer);
        if (settings.blockpage) {
            document.body.style.overflow = "hidden";
        }
        if (settings.texts.length > 0) {
            settings.title = settings.texts[0];
            LoadingArray = settings.texts;
        }
        Content = "<div id='mlBg" + ml + "' class='mnMlBackground' style='background-color:" + settings.backgroundcolor + ";'></div>";
        $("body").prepend(Content);
        Content = "<div id='ml" + ml + "' class='mnMlMainContent' data-loadingbg='#mlBg" + ml + "'>";
        Content += "<table>";
        Content += "<tr>";
        Content += "<td align='center'>";
        Content += "<div class='mnMlMainContainer' style='background-color:" + settings.backgroundcontent + ";'>";
        if (settings.title !== undefined) {
            Content += "<span class='mnMlTitle'>" + settings.title + "</span>";
        }
        if (settings.texts.length === 0) {
            if (settings.fa !== undefined) {
                Content += "<i class='mnMlLoadingIcon fa " + settings.fa + " fa-spin'></i>";
            }
            if (settings.content) {
                Content += "<span class='mnMlContent'>";
                Content += settings.content;
                Content += "</span>";
            }
        }
        Content += "</div>";
        Content += "</td>";
        Content += "</tr>";
        Content += "</table>";
        Content += "</div>";
        $("body").prepend(Content);
        var mlBg = $("#mlBg" + ml);
        var MetroLoading = $("#ml" + ml);
        if (settings.timeout !== undefined) {
            setTimeout(function() {
                if (typeof callback == "function") {
                    if (callback) {
                        callback("timeoutReach");
                    }
                }
                DestroytLoading(MetroLoading);
            }, settings.timeout);
        }

        mlBg.velocity({ opacity: settings.opacity, }, { duration: 400, });
		MetroLoading.velocity({ opacity: 1, }, { duration: 400, });
        
        if (settings.texts.length > 0) {
            var LoadingLabel = MetroLoading.find(".mnMlTitle");
            var InitialWidth = LoadingLabel.width();
            LoadingLabel.css({opacity: 0, left: "-50px"});
            
            LoadingLabel.velocity({ opacity: 1, }, { duration: 400, })
				.velocity({ left: 80, }, { duration: 3000, });
         
            CurrentLoading = 2;
            clearInterval(SpecialLoadingTimer);
            SpecialLoadingTimer = setInterval(function() {
                switch (CurrentLoading) {
                    case 1:
                        LoadingLabel.velocity({ opacity: 0, }, { duration: 300, complete: function(){ChangeText();}})
							.velocity({ left: -80, }, { duration: 0, })
							.velocity({ opacity: 1, }, { duration: 400, })
							.velocity({ left: 80, }, { duration: 3000, });
                        
                        CurrentLoading = 2;
                        break;
                    case 2:
                    	
                        LoadingLabel.velocity({ opacity: 0, }, { duration: 300, complete: function(){ChangeText();}})
        					.velocity({ left: 0, top: -80}, { duration: 0, })
        					.velocity({ opacity: 1, }, { duration: 400, })
        					.velocity({ top: 0, }, { duration: 2000, easing: "easeOutBounce", });
        					
                        CurrentLoading = 3;
                        break;
                    case 3:
                        LoadingLabel.velocity({ opacity: 0, }, { duration: 300, complete: function(){ChangeText();}})
    						.velocity({ left: 80}, { duration: 0, })
    						.velocity({ opacity: 1, }, { duration: 400, })
    						.velocity({ left: -80, }, { duration: 3000, });
                        
                        CurrentLoading = 4;
                        break;
                    case 4:
                        LoadingLabel.velocity({ opacity: 0, }, { duration: 300, complete: function(){ChangeText();}})
							.velocity({ top: +80, left:0, }, { duration: 0, })
							.velocity({ opacity: 1, }, { duration: 400, easing: "easeOutBounce",})
							.velocity({ top: 0, }, { duration: 3000, });

                        CurrentLoading = 1;
                        break;
                }
            }, 3200);
        }
        if (settings.colors.length > 0) {
            mlBg.css("background-color", settings.colors[0]);
            var MainContainer = MetroLoading.find(".mnMlMainContainer");
            MainContainer.css("background-color", settings.colors[0]);
            clearInterval(MsgTimer);
            MsgTimer = setInterval(function() {
                if (MetroLoading.attr("data-indexcolor") === undefined) {
                    MetroLoading.attr("data-indexcolor", "0");
                }
                var mlBg = $(MetroLoading.attr("data-loadingbg"));
                var MainContainer = MetroLoading.find(".mnMlMainContainer");
                var ColorIdx = MetroLoading.attr("data-indexcolor") * 1;
                if (ColorIdx >= settings.colors.length - 1) {
                    ColorIdx = 0;
                } else {
                    ColorIdx += 1;
                }
                var NextColor = settings.colors[ColorIdx];
                mlBg.velocity({ backgroundColor: NextColor, }, { duration: 400, });
                MetroLoading.attr("data-indexcolor", ColorIdx);
            }, settings.colortime);
        }
    };
    
    function DestroytLoading(MetroLoading) {
        clearInterval(MsgTimer);
        var MetroLoadingBG = $(MetroLoading.attr("data-loadingbg"));
        MetroLoadingBG.velocity({ opacity: 0, }, { duration: 300, });
		MetroLoading.velocity({ opacity: 0, }, { duration: 300, });
        setTimeout(function() {
            MetroLoadingBG.remove();
            MetroLoading.remove();
        }, 300);
        document.body.style.overflow = "visible";
    }
    
    function ChangeText() {
        SpecialIdx += 1;
        if (SpecialIdx > LoadingArray.length - 1) {
            SpecialIdx = 0;
        }
        $(".mnMlTitle").html(LoadingArray[SpecialIdx]);
    }
    
    /********************************** SIDE PANEL ***********************************************/
    var msp = 0;
    $.vSidePanel = function(settings, callback) {
        settings = $.extend({
            position: 1,
            title: undefined,
            content: undefined,
            iframe: undefined,
            iframecache: true,
            loadingmessage: "Loading",
            width: 250,
            fa: undefined,
            faloading: "fa-refresh",
            img: undefined,
            shadow: true,
            backgroundcontent: "#662d91",
            colortime: 1500,
            colors: [],
            timeout: undefined,
            blocked: false,
        }, settings);
        var Content = "";
        msp += 1;
        if (settings.position == 1) {
            settings.position = "mnspRight";
        } else {
            settings.position = "mnspLeft";
        }
        if (settings.shadow) {
            settings.shadow = "mnSbShadow";
        }
        if (settings.colors.length > 0) {
            settings.backgroundcontent = settings.colors[0];
        }
        var TouchClass;
        if ($.browser.device) {
            TouchClass = "mnSpTouchScroll";
        }
        Content += "<div id='msp" + msp + "' class='mnSidePanel " + settings.shadow + " " + 
        		settings.position + " " + TouchClass + "' style='width: " + 
        		settings.width + "px; background-color:" + 
        		settings.backgroundcontent + ";' data-blocked='" + settings.blocked + "'>";
        
        if (settings.iframe !== undefined) {
            if (settings.iframecache) {
                Content += "<table class='mspLoadingFrame'>";
                Content += "<tr>";
                Content += "<td align='center'>";
                Content += "<span class='mnSpTitle'>" + settings.loadingmessage + "</span>";
                Content += "<span class='mnSpIcon'>";
                Content += "<i class='fa " + settings.faloading + " fa-spin'></i>";
                Content += "</span>";
                Content += "</td>";
                Content += "</tr>";
                Content += "</table>";
            } else {
                Content += "<iframe src='" + settings.iframe + "'></iframe>";
            }
        } else {
            Content += "<table>";
            Content += "<tr>";
            Content += "<td align='center'>";
            if (settings.title !== undefined) {
                Content += "<span class='mnSpTitle'>" + settings.title + "</span>";
            }
            if (settings.content !== undefined) {
                Content += "<span class='mnSpContent'>";
                Content += settings.content;
                Content += "</span>";
            }
            if (settings.fa !== undefined || settings.img !== undefined) {
                Content += " <span class='mnSpIcon'>";
                if (settings.img !== undefined) {
                    Content += "<img src='" + settings.img + "'>";
                } else {
                    Content += "<i class='fa " + settings.fa + "'></i>";
                }
                Content += "</span>";
            }
            Content += "</td>";
            Content += "</tr>";
            Content += "</table>";
            Content += "</div>";
        }
        $("body").append(Content);
        var MetroSidePanel = $("#msp" + msp);
        MetroSidePanel.attr("data-width", settings.width);
        CheckSpaceSP(MetroSidePanel);
        MetroSidePanel.attr("data-mouseover", "true");
        setTimeout(function() {
            MetroSidePanel.attr("data-mouseover", "false");
        }, 300);
        var CurrentWidth = MetroSidePanel.width();
        if (settings.position == "mnspLeft") {
            MetroSidePanel.css("left", "-" + (CurrentWidth / 5) + "px");
            MetroSidePanel.velocity({ opacity: 1, }, { duration: 400, })
            	.velocity({ left: 0, }, { duration: 900, easing: "easeOutBounce",});
        } else {
            MetroSidePanel.css("right", "-" + (CurrentWidth / 5) + "px");
            MetroSidePanel.velocity({ opacity: 1, }, { duration: 400, })
        		.velocity({ right: 0, }, { duration: 900, easing: "easeOutBounce",});
        }
        if (settings.iframe !== undefined && settings.iframecache) {
            LoadiFrameWithCache(MetroSidePanel, settings.iframe);
        }
        if (settings.colors.length > 0) {
            MetroSidePanel.css("background-color", settings.colors[0]);
            var MainContainer = MetroSidePanel;
            MainContainer.css("background-color", settings.colors[0]);
            SidePanelTimer = setInterval(function() {
                if (MetroSidePanel.attr("data-indexcolor") === undefined) {
                    MetroSidePanel.attr("data-indexcolor", "0");
                }
                var ColorIdx = MetroSidePanel.attr("data-indexcolor") * 1;
                if (ColorIdx >= settings.colors.length - 1) {
                    ColorIdx = 0;
                } else {
                    ColorIdx += 1;
                }
                var NextColor = settings.colors[ColorIdx];
                MetroSidePanel.velocity({ backgroundColor: NextColor, }, { duration: 800, });
                MetroSidePanel.attr("data-indexcolor", ColorIdx);
            }, settings.colortime);
        }
        if (settings.timeout !== undefined) {
            setTimeout(function() {
                if (typeof callback == "function") {
                    if (callback) {
                        callback("timeoutReach");
                    }
                }
                MetroSidePanel.attr("data-blocked", "false");
                DestroySidePanel(MetroSidePanel);
            }, settings.timeout);
        }
    };
    
    function LoadiFrameWithCache(MetroSidePanel, URL) {
        $iframe = $('<iframe class="mspIframeLoaded">');
        $iframe.attr({
            src: URL
        });
        $iframe.appendTo(MetroSidePanel);
        $iframe.load(function() {
            MetroSidePanel.find(".mspLoadingFrame").remove();
            $iframe.velocity({ opacity: 1, }, { duration: 500, });
        });
    }
    
    $.sidePanelKill = function() {
        $(".mnSidePanel").each(function() {
            $(this).attr("data-blocked", "false");
            DestroySidePanel($(this));
        });
    };
    
    function DestroySidePanel(MetroSidePanel) {
        var MouseOver = MetroSidePanel.attr("data-mouseover");
        var SidePanelBlocked = MetroSidePanel.attr("data-blocked");
        if (SidePanelBlocked == "true") {
            return false;
        }
        if (MetroSidePanel.hasClass("mnspRight")) {
            MetroSidePanel.velocity({ opacity: 0, }, { duration: 400, })
    			.velocity({ right: "-=150", }, { duration: 1000, easing: "easeOutBounce",});
        } else {
            MetroSidePanel.velocity({ opacity: 0, }, { duration: 400, })
				.velocity({ left: "-=150", }, { duration: 1000, easing: "easeOutBounce",});
        }
        setTimeout(function() {
            MetroSidePanel.remove();
        }, 410);
        clearInterval(SidePanelTimer);
    }
    
    function CheckSpaceSP(MetroSidePanel) {
        var WindowWidth = $(document).width();
        var MetroSidePanelWidth = MetroSidePanel.width();
        var MetroSidePanelOriginalWidth = eval(MetroSidePanel.attr("data-width"));
        if (WindowWidth < (MetroSidePanelWidth + 30)) {
            MetroSidePanel.css("width", (WindowWidth - 30) + "px");
        } else {
            if (WindowWidth >= (MetroSidePanelOriginalWidth + 30)) {
                MetroSidePanel.velocity({ width: MetroSidePanelOriginalWidth, }, { duration: 300, });
            } else {
            	MetroSidePanel.velocity({ width: (WindowWidth - 30), }, { duration: 300, });
            }
        }
    }

    /********************************** Message Box ***********************************************/   
    var mm = 0;
    $.vMessageBox = function(settings, callback) {
        settings = $.extend({
            title: undefined,
            content: undefined,
            normalbutton: undefined,
            activebutton: "#6D1D99",
            buttons: [],
            icons: [],
            defaultbutton: undefined,
            sound: true,
            input: undefined,
            placeholder: "",
            maxlength: 1000,
            showcounter: true,
            options: [],
            values: [],
            soundpath: "static/sound/",
            backgroundcolor: "#000000",
            backgroundcontent: "#232323",
            blockpage: true,
            opacity: 0.7,
            colortime: 1500,
            colors: [],
            timeout: undefined,
        }, settings);
        var Content = "";
        mm += 1;
        if ($.browser.mobile) {
            settings.sound = false;
        }
        if (settings.sound) {
            PlaySound(settings.soundpath, "messagebox");
        }
        if (settings.normalbutton === undefined) {
            settings.normalbutton = settings.backgroundcontent;
        }
        if (settings.blockpage) {
            document.body.style.overflow = "hidden";
        }
        if (settings.showcounter) {
            $("#mnLetterCounter").attr("data-show", "yes");
        } else {
            $("#mnLetterCounter").attr("data-show", "no");
        }
        var NewInput = "";
        if (settings.input !== undefined) {
            NewInput += "<span class='mbMsgBoxTextContent'>";
            switch (settings.input) {
                case "text":
                    NewInput = "<input class='mnInputField' type='text' placeholder='" + settings.placeholder + "' maxlength='" + settings.maxlength + "'>";
                    break;
                case "textarea":
                    NewInput = "<textarea class='mnTextareaField' type='text' placeholder='" + settings.placeholder + "' maxlength='" + settings.maxlength + "'></textarea>";
                    break;
                case "password":
                    NewInput = "<input class='mnInputField' type='password' placeholder='" + settings.placeholder + "' maxlength='" + settings.maxlength + "'>";
                    break;
                case "email":
                    NewInput = "<input class='mnInputField' type='email' placeholder='" + settings.placeholder + "' maxlength='" + settings.maxlength + "'>";
                    break;
                case "select":
                    if (settings.options.length === 0) {
                        alert("Metro Notifications: I required 'options', to display the Input Selectbox");
                        document.body.style.overflow = "visible";
                        return;
                    }
                    NewInput = "<select class='mnSelectField'>";
                    for (var i = 0; i <= settings.options.length - 1; i++) {
                        var Value = settings.options[i];
                        if (settings.values[i] !== undefined) {
                            Value = settings.values[i];
                        }
                        NewInput += "<option value='" + Value + "'>" + settings.options[i] + "</option>";
                    }
                    NewInput += "</select>";
                    break;
                default:
                    alert("Metro Notifications: That input type is not supported");
                    break;
            }
            NewInput += "</span>";
        }
        Content = "<div id='mnMmBg" + mm + "' class='mnMmBackScreen' style='background-color:" + settings.backgroundcolor + "'></div>";
        $("body").append(Content);
        Content = "<div id='mnMmBox" + mm + "' class='mnMsgBox' data-background='#mnMmBg" + mm + "'>";
        Content += "<table>";
        Content += "<tr>";
        Content += "<td align='center' class='mnMsgBoxTextContainer'>";
        Content += "<div class='mbMsgBoxMainContainer' style='background-color:" + settings.backgroundcontent + "'>";
        if (settings.title !== undefined) {
            Content += "<span class='mnMsgBoxTitle'>";
            Content += settings.title;
            Content += "</span>";
        }
        if (settings.content !== undefined) {
            Content += "<span class='mbMsgBoxTextContent'>";
            Content += settings.content;
            Content += "</span>";
        }
        Content += NewInput;
        if (settings.buttons.length > 0) {
            Content += "<span class='mbMsgBoxButtonSection'>";
            for (var i = 0; i <= settings.buttons.length - 1; i++) {
                var Icon = settings.icons[i];
                if (settings.defaultbutton !== undefined) {
                    if ((i + 1) == settings.defaultbutton) {
                        if (Icon !== undefined) {
                            Content += "<button data-default='true' style='background-color:" + settings.activebutton + "' data-normalcolor='" + settings.activebutton + "' data-hovercolor='" + settings.activebutton + "'><i class='fa " + Icon + "'></i>" + settings.buttons[i] + "</button>";
                        } else {
                            Content += "<button data-default='true' style='background-color:" + settings.activebutton + "' data-normalcolor='" + settings.activebutton + "' data-hovercolor='" + settings.activebutton + "'>" + settings.buttons[i] + "</button>";
                        }
                    } else {
                        if (Icon !== undefined) {
                            Content += "<button style='background-color:" + settings.normalbutton + "' data-normalcolor='" + settings.normalbutton + "' data-hovercolor='" + settings.activebutton + "'><i class='fa " + Icon + "'></i>" + settings.buttons[i] + "</button>";
                        } else {
                            Content += "<button style='background-color:" + settings.normalbutton + "' data-normalcolor='" + settings.normalbutton + "' data-hovercolor='" + settings.activebutton + "'>" + settings.buttons[i] + "</button>";
                        }
                    }
                } else {
                    if (Icon !== undefined) {
                        Content += "<button style='background-color:" + settings.normalbutton + "' data-normalcolor='" + settings.normalbutton + "' data-hovercolor='" + settings.activebutton + "'><i class='fa " + Icon + "'></i>" + settings.buttons[i] + "</button>";
                    } else {
                        Content += "<button style='background-color:" + settings.normalbutton + "' data-normalcolor='" + settings.normalbutton + "' data-hovercolor='" + settings.activebutton + "'>" + settings.buttons[i] + "</button>";
                    }
                }
            }
            Content += "</span>";
        }
        Content += "</div>";
        Content += "</td>";
        Content += "</tr>";
        Content += "</table>";
        Content += "</div>";
        $("body").append(Content);
        var MetroBackground = $("#mnMmBg" + mm);
        var MetroMsg = $("#mnMmBox" + mm);
        
        MetroBackground.velocity({ opacity: settings.opacity, }, { duration: 400, });
        MetroMsg.velocity({ opacity: 1, }, { duration: 400, });
        
//        var tl = new TimelineLite();
//        tl.to(MetroBackground, 0.4, {
//            autoAlpha: settings.opacity
//        }).to(MetroMsg, 0.4, {
//            autoAlpha: 1
//        }, "-=0.1");
        
        if (settings.defaultbutton !== undefined) {
            setTimeout(function() {
                MetroMsg.find(".mbMsgBoxButtonSection button").each(function() {
                    var isDefault = $(this).attr("data-default");
                    if (isDefault === "true") {
                        $(this).focus();
                    }
                });
            }, 400);
        }
        if (settings.input !== undefined && $.browser.mobile === false) {
            setTimeout(function() {
                MetroMsg.find("input,textarea").focus();
            }, 401);
        }
        if (settings.colors.length > 0) {
            MetroBackground.css("background-color", settings.colors[0]);
            var MainContainer = MetroMsg.find(".mbMsgBoxMainContainer");
            MainContainer.css("background-color", settings.colors[0]);
            clearInterval(MsgTimer);
            MsgTimer = setInterval(function() {
                if (MetroMsg.attr("data-indexcolor") === undefined) {
                    MetroMsg.attr("data-indexcolor", "0");
                }
                var MetroBackground = $(MetroMsg.attr("data-background"));
                var MainContainer = MetroMsg.find(".mbMsgBoxMainContainer");
                var Buttons = MetroMsg.find(".mbMsgBoxButtonSection button");
                var ColorIdx = MetroMsg.attr("data-indexcolor") * 1;
                if (ColorIdx >= settings.colors.length - 1) {
                    ColorIdx = 0;
                } else {
                    ColorIdx += 1;
                }
                var NextColor = settings.colors[ColorIdx];
                
                MainContainer.velocity({ backgroundColor: NextColor, }, { duration: 800, });
                Buttons.velocity({ backgroundColor: NextColor, }, { duration: 800, });
 			   	MetroBackground.velocity({ backgroundColor: NextColor, }, { duration: 800, });
                
//                tl.to([MainContainer, Buttons, MetroBackground], 0.8, {
//                    backgroundColor: NextColor
//                });
                MetroMsg.attr("data-indexcolor", ColorIdx);
            }, settings.colortime);
        }
        if (settings.timeout !== undefined) {
            setTimeout(function() {
                if (typeof callback === "function") {
                    if (callback) {
                        callback("timeoutReach");
                    }
                }
                DestroyMessageBox(MetroMsg);
            }, settings.timeout);
        }
        if (settings.buttons.length > 0) {
            MetroMsg.find(".mbMsgBoxButtonSection button").bind("tap", function() {
                var Value = MetroMsg.find("input,textarea, select").val();
                var SelectedText = MetroMsg.find("select option:selected").text();
                $(this).unbind("tap");
                var ButtonText = $(this).text();
                if (typeof callback === "function") {
                    if (callback) {
                        callback("buttonPress", ButtonText, Value, SelectedText);
                    }
                }
                DestroyMessageBox(MetroMsg);
            });
        }
    };
    
    function DestroyMessageBox(MetroMessageBox) {
        var MetroBackground = $(MetroMessageBox.attr("data-background"));
//        var tl = new TimelineLite();
        var txtLetterCounter = $("#mnLetterCounter");
        txtLetterCounter.velocity({ opacity: 0, }, { duration: 300, }); 
        MetroBackground.velocity({ opacity: 0, }, { duration: 300, });
        MetroMessageBox.velocity({ opacity: 0, }, { duration: 300, });
        $("#mnLetterCounter").velocity({ opacity: 0, }, { duration: 300, });
        
//        tl.to(txtLetterCounter, 0.3, {
//            autoAlpha: 0
//        }).to(MetroBackground, 0.3, {
//            autoAlpha: 0
//        }, "-=0.3").to(MetroMessageBox, 0.3, {
//            autoAlpha: 0
//        }, "-=0.3").to($("#mnLetterCounter"), 0.3, {
//            autoAlpha: 0
//        }, "-=0.3");
        
        setTimeout(function() {
            MetroBackground.remove();
            MetroMessageBox.remove();
        }, 300);
        document.body.style.overflow = "visible";
        clearInterval(MsgTimer);
    }
});
