var nav_tab_offset;
var is_crm_animated = 0;

$(function(){

nav_tab_offset = 0;
	
	

	$(window).load(function(){
		onResize();
		onScroll();
	});
	
	$(window).resize(function(){
	onResize();
		
	});
	
	$(window).scroll(function(){
		onScroll();
	});
	
	onScroll();//init
	onResize();
		

	if($(".home-tabs-mobile")[0]){
		$(".home-tabs-mobile li a").hover(function(){
			$(".home-tabs-mobile li").removeClass("active");
			$(this).parent().addClass("active");
			
			var id = $(this).attr("href");
			$(".tabs-content .content").removeClass("active");
			$(id).addClass("active");


		});

		
	}
		
	if($("a.nav-title")[0]){
		$("a.nav-title").click(function(){
			if($(".navigation-popup").is(":visible")==true){
				$(this).removeClass("close");
					hideMenu();
			}else{
				$(this).addClass("close");
				showMenu();
			}
			
		});
		
		$(".navigation-content .btn_nav_close").click(function(){
			hideMenu();
				$("a.nav-title").removeClass("close");
		});

		$(".get-started-popup .btn_nav_close,.get-started-popup .btnback").click(function(){
			hideFormMenu();
				
		});

		/*$(".navigation-content .btndemo").click(function(){
			showFormMenu();
		});*/
	}
	
	

	if($(".navigation-content .btn_nav_close,.get-started-popup .btn_nav_close")[0]){
		$(".navigation-content .btn_nav_close,.get-started-popup .btn_nav_close").mouseover(function(){
			$(this).addClass("pulse");
		}).mouseout(function(){
				$(this).removeClass("pulse");
		})
	}
	
	if($(".ipad-rotator")[0]){
		$(".ipad-rotator").css("visibility","visible")
	}//end if

	if($(".page3-pane-5")[0]){
		$(".page3-pane-5").css("visibility","visible");
	}

	if($(".page2-pane-11")[0]){
		$(".page2-pane-11").css("visibility","visible");
	}//

	if($(".page2-pane-12")[0]){
		$(".page2-pane-12").css("visibility","visible");
	}//

	if($(".slide-container")[0]){
		$(".slide-container").css("visibility","visible");
	}

	$("#modal_trigger").leanModal({top : 5, overlay : 0.85, closeButton: ".modal_close" });
	$(".btndemo").leanModal({top : 5, overlay : 0.85, closeButton: ".modal_close" });
	
	
	$('#modal_trigger').click(function(){
		//window.scrollTo(0, 0);
		$('html').animate({scrollTop:0}, 'slow');//IE, FF
		$('body').animate({scrollTop:0}, 'slow');//chrome, don't know if Safari works
		$('.popupPeriod').fadeIn(1000, function(){
			setTimeout(function(){$('.popupPeriod').fadeOut(2000);}, 3000);
		});
	});

    $('.btndemo').click(function(){
    	hideMenu();
				$("a.nav-title").removeClass("close");
        //window.scrollTo(0, 0);
        $('html').animate({scrollTop:0}, 'slow');//IE, FF
        $('body').animate({scrollTop:0}, 'slow');//chrome, don't know if Safari works
        $('.popupPeriod').fadeIn(1000, function(){
            setTimeout(function(){$('.popupPeriod').fadeOut(2000);}, 3000);
        });
    });


    if($(".page3-pane-4")[0]){
    	$(".page3-pane-4 .bgs.bg1").load(function(){
    		 showbgtab(".page3-pane-4 .bgs",1);
    		});
    	
 showbgtab(".page3-pane-4 .bgs",1);

        $(".page3-pane-4 .tabs li a").click(function(){
            var href = $(this).attr("href");
            switch(href){
                case "#panel8":
                showbgtab(".page3-pane-4 .bgs",1);
                break;
                case "#panel9":
                showbgtab(".page3-pane-4 .bgs",2);
                break;
                case "#panel10":
                showbgtab(".page3-pane-4 .bgs",3);
                break;
                case "#panel11":
                showbgtab(".page3-pane-4 .bgs",4);
                break;
            }
        });

    }//end

     if($(".page3-pane-2")[0]){

    		$(".page3-pane-2 .bgs.bg1").load(function(){
    		 showbgtab(".page3-pane-2 .bgs",1);
    		});
    showbgtab(".page3-pane-2 .bgs",1);


        $(".page3-pane-2 .tabs li a").click(function(){
            var href = $(this).attr("href");
            switch(href){
                case "#panel12":
                showbgtab(".page3-pane-2 .bgs",1);
                break;
                case "#panel13":
                showbgtab(".page3-pane-2 .bgs",2);
                break;
                case "#panel14":
                showbgtab(".page3-pane-2 .bgs",3);
                break;
                case "#panel15":
                showbgtab(".page3-pane-2 .bgs",4);
                break;
            }
        });

    }//end


    if($(".page3-pane-1")[0]){

    	$(".page3-pane-1 .tabs li a").click(function(){
    		var href = $(this).attr("href");
    		$(".img-bottom").removeClass("active");
    		$(".img-bottom").css("opacity",0);
    		$(".img-bottom").stop().animate({'opacity':1},500);
    		switch(href){
    			case "#panel16":
    			$(".img-bottom.item1").addClass("active");
    			break;
    			case "#panel17":
    			$(".img-bottom.item2").addClass("active");
    			break;
    			case "#panel18":
    			$(".img-bottom.item3").addClass("active");
    			break;
    		}
    	});
    }//end


    if($("nav.tab-bar")[0]){
    	$("nav.tab-bar").css("visibility","visible");
    }

    if($(".business-types-page")[0]){
    	$(".business-types-page").css("visibility","visible");
    }

    if($(".page6-pane-3")[0]){
    	$(".page6-pane-3").xparallax();
    }

});

function showbgtab(cls,index){
	$(cls).removeClass("active")
	//console.log(cls+" bg"+index);
	$(cls+".bg"+index).addClass("active");
	var imgpos = ($(cls+".bg"+index).width()/2)* -1;
	 $(cls+".bg"+index).css("margin-left",imgpos);
}
function hideMenu(){
	if($(".navigation-popup")[0]){
		$(".navigation-popup .navigation-content").stop().animate({'left':$(window).width()+100},200,function(){
			$(".navigation-popup").fadeOut();
		});
		$(".navigation-popup").css("top",$("nav.tab-bar").offset().top);
		
	}
}

function hideFormMenu(){
		$(".navigation-popup .get-started-popup").stop().animate({'left':$(window).width()+100},200,function(){
			$(".navigation-popup .navigation-content").show();
			if($(window).width()<=640){
				$(".navigation-popup .navigation-content").stop().animate({'left': 0},200);
			}
			else{
				$(".navigation-popup .navigation-content").stop().animate({'left': $(window).width() - $(".navigation-popup .navigation-content").width()},200);
			}	
		});
}//end hideFormMenu


function showFormMenu(){
	setdefault("#business_name","Business Legal Name");
	setdefault("#owner_name","Owner's Name");
	setdefault("#phone_number","Phone Number");
	setdefault("#owner_email","Owner Email");
	setdefault("#business_type","Business Type");
	setdefault("#city_state_zip","City, State, Zip");
	$(".navigation-popup .get-started-popup").show();
	$(".navigation-popup .get-started-popup").css("left",$(window).width()+100);
	$(".navigation-popup .navigation-content").stop().animate({'left':$(window).width()+100},200,function(){
		$(".navigation-popup .navigation-content").hide();
		if($(window).width()<=640){
				$(".navigation-popup .get-started-popup").stop().animate({'left': 0},200);
			}
			else{
				$(".navigation-popup .get-started-popup").stop().animate({'left': $(window).width() - $(".navigation-popup .get-started-popup").width()},200);
			}
	});

}//end showformenu

function showMenu(){
	if($(".navigation-popup")[0]){
		$(".navigation-popup").show();
		$(".navigation-popup").css("opacity",0);
		$(".navigation-popup .navigation-content").css("left",$(window).width()+100);
		
		$(".navigation-popup").stop().animate({'opacity':1},200,function(){
			if($(window).width()<=640){
				$(".navigation-popup .navigation-content").stop().animate({'left': 0},200);
			}
			else{
				$(".navigation-popup .navigation-content").stop().animate({'left': $(window).width() - $(".navigation-popup .navigation-content").width()},200);
			}
		});
		$(".navigation-popup").css("top",$("nav.tab-bar").offset().top);
		
	}
}//end showMenu
function onResize(){
		if($(".zs-slideshow")[0] && $(".home-page")[0]){
			nav_tab_offset = $(".zs-slideshow").height();
		}
		//console.log(nav_tab_offset)
}

function onScroll(){
		
		$(".navigation-popup").css("top",$("nav.tab-bar").offset().top);
	
			//console.log($(window).scrollTop()+">"+nav_top_orig_pos)
		if($(window).scrollTop()>=nav_tab_offset){
			$("nav.tab-bar").addClass("sticky");
			if($(".after-menu-content")[0]){
			$(".after-menu-content").addClass("sticky");
			}
			
		}else{
				$("nav.tab-bar").removeClass("sticky");
				if($(".after-menu-content")[0]){
				$(".after-menu-content").removeClass("sticky");
				}
		}


		if($(".shopping-bags")[0]){
			//console.log($(window).scrollTop()+" > "+$("#crm").offset().top);

			if($(window).scrollTop()>($("#crm").offset().top-400) && is_crm_animated == 0){
				is_crm_animated = 1;
				var index = 1;
				setInterval(function(){
					if($(".shopping-bags .item_"+index)[0]){
						$(".shopping-bags .item_"+index).addClass("active");
						index++;
					}

				
				},500);


			}//end
		}//end of shopping-bags

}


function checkcontactform(){
	if($("input[name='name']").val()==""){
		
		alert("Please let us know your name");
		$("input[name='name']").focus();
		return false;
	}
	
	if($("input[name='email']").val()=="" && validateEmail($("input[name='email']").val())==false){
		alert("Please let us know your valid email address");
		$("input[name='email']").focus();
		return false;
	}
	
	if($("input[name='phone']").val()==""){
		alert("Please let us know your phone");
		$("input[name='phone']").focus();
		return false;
	}
	
	if($("input[name='location']").val()==""){
		alert("Please let us know your location");
		$("input[name='location']").focus();
		return false;
	}
		if($("textarea[name='message']").val()==""){
		alert("Please let us know your message");
		$("input[name='message']").focus();
		return false;
	}
	
	return true;
}

function checkgetstartedform(){



	if($("input[name='business_name']").val()=="Business Legal Name"){
		
		alert("Please let us know your company name");
		//$("input[name='business_name']").focus();
		return false;
	}

	if($("input[name='owner_name']").val()=="Owner's Name"){
		
		alert("Please let us know owner's name");
		//$("input[name='owner_name']").focus();
		return false;
	}//end

	if($("input[name='phone_number']").val()=="Phone Number"){
		
		alert("Please let us know your phone number");
		//$("input[name='phone_number']").focus();
		return false;
	}//end

	if($("input[name='owner_email']").val()=="Owner Email"){
		
		alert("Please let us know your email address");
		//$("input[name='owner_email']").focus();
		return false;
	}//end

	if($("input[name='business_type']").val()=="Business Type"){
		
		alert("Please let us know your business type");
		//$("input[name='business_type']").focus();
		return false;
	}//end

	if($("input[name='city_state_zip']").val()=="City, State, Zip"){
		
		alert("Please let us know your city, state, zip");
		//$("input[name='city_state_zip']").focus();
		return false;
	}//end

	return true;
}//end

function checkpartnersform(){

  
	if($("#business_legal_name").val()==""){
		alert("Please let us know your company name");
		$("#business_legal_name").focus();
		return false;
	}

	if($("#business_owners_name").val()==""){
		alert("Please let us know your name");
		$("#business_owners_name").focus();
		return false;
	}

	if($("#business_phone_number").val()==""){
		alert("Please let us know your phone number");
		$("#business_phone_number").focus();
		return false;
	}

	if($("#business_email").val()=="" || validateEmail($("#business_email").val())==false){
		alert("Please let us know your email");
		$("#business_email").focus();
		return false;
	}

	if($("#business_how").val()==""){
		alert("Please let us know how did you hear about us");
		$("#business_how").focus();
		return false;
	}
	
	return true;
}

function checkrequestform(){

  
	if($("#request_legal_name").val()==""){
		alert("Please let us know your company name");
		$("#request_legal_name").focus();
		return false;
	}

	if($("#request_owners_name").val()==""){
		alert("Please let us know your name");
		$("#request_owners_name").focus();
		return false;
	}

	if($("#request_phone_number").val()==""){
		alert("Please let us know your phone number");
		$("#request_phone_number").focus();
		return false;
	}

	if($("#request_email").val()=="" || validateEmail($("#request_email").val())==false){
		alert("Please let us know your email");
		$("#request_email").focus();
		return false;
	}

	if($("#request_how").val()==""){
		alert("Please let us know how did you hear about us");
		$("#request_how").focus();
		return false;
	}
	
	return true;
}


function checkdeveloperform(){

	
if($("#developer_legal_name").val()==""){
		alert("Please let us know your company name");
		$("#developer_legal_name").focus();
		return false;
	}

	if($("#developer_owners_name").val()==""){
		alert("Please let us know your name");
		$("#developer_owners_name").focus();
		return false;
	}

	if($("#developer_phone_number").val()==""){
		alert("Please let us know your phone number");
		$("#developer_phone_number").focus();
		return false;
	}

	if($("#developer_email").val()=="" || validateEmail($("#developer_email").val())==false){
		alert("Please let us know your email");
		$("#developer_email").focus();
		return false;
	}

	if($("#developer_how").val()==""){
			alert("Please let us know how did you hear about us");
		$("#developer_how").focus();
		return false;
	}
	
	return true;
}





function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}//end

function setdefault(id,defval){
	if($(id)[0]){

		$(id).unbind("focus");
		$(id).unbind("blur");
		$(id).val(defval);
		$(id).focus(function(){
				
				if($(this).val()==defval){
					$(this).val("");
				}
		});
		$(id).blur(function(){
				
				if($(this).val()==defval){
					$(this).val("");
				}else{
					if($(this).val()==""){
					$(this).val(defval);
					}
				
				}
		});

	}//end
}//end

//override mouse wheel
$(function(){
	
	//overridermousewheel();
});
$(window).load(function(){
	
	//overridermousewheel();
});
$(window).resize(function(){
	
	//overridermousewheel();
});
function overridermousewheel(){
	var wheel = false,
    $docH = $(document).height() - $(window).height(),
    $scrollTop = $(window).scrollTop();

	$(window).bind('scroll', function() {
		if (wheel === false) {
			$scrollTop = $(this).scrollTop();
		}
	});
	$(document).bind('DOMMouseScroll mousewheel', function(e, delta) {
		if (navigator.userAgent.indexOf('Mac OS X') != -1) {   
	  
		}else{
			 delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;
		wheel = true;

		$scrollTop = Math.min($docH, Math.max(0, parseInt($scrollTop - delta * 60)));

		$('html,body').stop().animate({
			scrollTop: $scrollTop + 'px'
		}, 2000, 'easeOutQuint', function() {
			wheel = false;
		});
		return false;
		}
	});
}

jQuery.fn.xparallax=function(){
	var s = $(this);
	function parallax(){
		//console.log(s.attr("class")+" "+s.offset().top)
		s.each(function(i,val){
		var x = $(window).scrollTop() - $(this).offset().top ;
		var para = (x * 0.3) * -1;
		$(this).css("background-position","center "+para+"px");
		});
		
	}
	$(window).scroll(function(){
		parallax();
	});
	$(window).load(function(){
		parallax();
	});
}//end