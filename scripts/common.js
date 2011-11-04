jQuery(document).ready(function() {
	
	console.log('hello world');

/* Button size */
	var button = jQuery('.purp-btn').width() + 'px';	
	jQuery('.btn-wrap button').each(function() {
		// console.log(button);
		jQuery(this).parent('.btn-wrap').css('height', button);
	});

/* ANIMATE PAGE */
	
	// if url is targeted bring up the col wrapper opacity right away
	var currentURL = window.location;
	if (currentURL.hash != '') {
		jQuery('.col-wrapper').css({'opacity' : '1', 'filter' : 'alpha(opacity=1)', 'filter' : '"alpha(opacity=1)"'});
	}

	addLoadEvent(function() {
					
		jQuery('.brn-btn').queue(function() {
			jQuery(this).addClass('move');
			
			jQuery('body').delay(225).queue(function() {
				jQuery(this).addClass('snap');
			
				jQuery('.purp-btn').delay(80).queue(function() {
					jQuery(this).addClass('move');
					
					jQuery('.grn-btn').delay(500).queue(function() {
						jQuery(this).addClass('grow');
							
						jQuery('.col-wrapper').css({'opacity' : '1', 'filter' : 'alpha(opacity=1)', 'filter' : '"alpha(opacity=1)"'});
							
						jQuery('.site-title').delay(100).queue(function() {
							
							jQuery(this).css({'opacity' : '1', 'filter' : 'alpha(opacity=1)','filter' : '"alpha(opacity=1)"'});
						
							jQuery(this).dequeue();
						});
						jQuery(this).dequeue();
					});
					jQuery(this).dequeue();
				});
				jQuery(this).dequeue();
			});
			jQuery(this).dequeue();
		});
	});
	
//* Is there and wpadmin bar?

	jQuery('#wpadminbar').each(function() {
		var wpBar = jQuery(this).height();
		console.log(wpBar);
		jQuery('#access').animate({
    		top: wpBar
		});
	});
	
	
	
/* Button hover */	
	jQuery('.btn-wrap button').hover(function() {
		var static = jQuery(this).children('img').attr('src');
		
		if(static == img1.src) {
			jQuery(this).children('img').attr('src', img4.src);
		} else if(static == img2.src) {
			jQuery(this).children('img').attr('src', img5.src);
		} else if(static == img3.src) {
			jQuery(this).children('img').attr('src', img6.src);
		}
	}, function() {
		var hovering = jQuery(this).children('img').attr('src');
		
		if(hovering == img4.src) {
			jQuery(this).children('img').attr('src', img1.src);
		} else if(hovering == img5.src) {
			jQuery(this).children('img').attr('src', img2.src);
		} else if(hovering == img6.src) {
			jQuery(this).children('img').attr('src', img3.src);
		}
	}); /* End Button hover */

/* Button click */
	jQuery('.btn-wrap button').click(function() {
	
		var image = jQuery(this).children('img');
		var preClick = image.attr('src');
		
		if(preClick == img4.src) {
		
			var downSeq = [img7.src, img13.src, img10.src];			
			dotsQueue(image, 'down', 'purple', '', downSeq);

			jQuery(this).parent('.btn-wrap').siblings('.btn-wrap').each(function(){
				var off = jQuery(this).find('img');
				var offSrc = off.attr('src');				

				if (offSrc == img11.src) {
					
					var upSeq = [img14.src, img8.src, img5.src, img2.src];
					dotsQueue(off, 'up', 'purple', 'green', upSeq);
				
				} else if (offSrc == img12.src) {
				
					var upSeq = [img15.src, img9.src, img6.src, img3.src];
					dotsQueue(off, 'up', 'purple', 'brown', upSeq);
				} 
			});
			
			queColor('purple');

		} else if(preClick == img5.src) {
		
			var downSeq = [img8.src, img14.src, img11.src];
			dotsQueue(image, 'down', 'green', '', downSeq);
		
			jQuery(this).parent('.btn-wrap').siblings('.btn-wrap').each(function(){
				var off = jQuery(this).find('img');
				var offSrc = off.attr('src');
								
				if (offSrc == img10.src) {
				
					var upSeq = [img13.src, img7.src, img4.src, img1.src];
					dotsQueue(off, 'up', 'green', 'purple', upSeq);
			
				} else if (offSrc == img12.src) {
				
					var upSeq = [img15.src, img9.src, img6.src, img3.src];
					dotsQueue(off, 'up', 'green', 'brown', upSeq);
				}
			});
			
			queColor('green');
			
		} else if(preClick == img6.src) {
		
			var downSeq = [img9.src, img15.src, img12.src];
			dotsQueue(image, 'down', 'brown', '', downSeq);			
			
			jQuery(this).parent('.btn-wrap').siblings('.btn-wrap').each(function(){
				var off = jQuery(this).find('img');
				var offSrc = off.attr('src');
			
				if (offSrc == img10.src) { 
					
					var upSeq = [img13.src, img7.src, img4.src, img1.src];
					dotsQueue(off, 'up', 'brown', 'purple', upSeq);
										
				} else if (offSrc == img11.src) {
				
					var upSeq = [img14.src, img8.src, img5.src, img2.src];
					dotsQueue(off, 'up', 'brown', 'green', upSeq);
				}
			});
			
			queColor('brown');
		}		
	}); /* End Button click */

// MORE LINK 

	jQuery('.more-nav a').click(function(){	
		var link = jQuery(this);
		var drop = jQuery('.fall').height();
		if (!drop) {
			var winHeight = 150;//.75 * jQuery(window).height();
			console.log(winHeight);	
			jQuery('body').addClass('fall');
			jQuery('.social-med, .menu-primary-container').animate(
				{paddingTop: winHeight}, 
				1500, 
				'easeOutQuint',
				function() {
					jQuery(link).html('Less');
					
				}
			);
		} else {
			jQuery('body').removeClass('fall');
			jQuery('.social-med, .menu-primary-container').animate(
				{paddingTop: 0}, 
				1500, 
				'easeOutQuint',
				function() { 
					jQuery(link).html('More');
					
				}
			);
		}
	});
	
// anchor reload bug
		
	jQuery('a[href*="joepahl.is"]').each(function(){
		var link = jQuery(this).attr('href');
		var myURL = parseURL(link);
		if (myURL.path == currentURL.pathname && myURL.hash != '') {
			jQuery(this).attr('href', '#' + myURL.hash);
		}
	});
	
});	/* End document.ready */

/* window resize */	
jQuery(window).resize(function() {
	var button = jQuery('.purp-btn').width() + 'px';
	jQuery('.btn-wrap button').each(function() {
		jQuery(this).parent('.btn-wrap').css('height', button);
	});
});	/* End window resize */	
	
/* Preload dots */
if (document.images) {
	img1 = new Image();
	img2 = new Image();
	img3 = new Image();
	img4 = new Image();
	img5 = new Image();
	img6 = new Image();
	img7 = new Image();
	img8 = new Image();
	img9 = new Image();
	img10 = new Image();
	img11 = new Image();
	img12 = new Image();
	img13 = new Image();
	img14 = new Image();
	img15 = new Image();

	img1.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/up_100_210f28.png",
	img2.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/up_100_0f2821.png",
	img3.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/up_100_28200f.png",
	img4.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/up_50_210f28.png",
	img5.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/up_50_0f2821.png",
	img6.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/up_50_28200f.png"
	img7.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/flat_210f28.png",
	img8.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/flat_0f2821.png",
	img9.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/flat_28200f.png",
	img10.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/down_100_210f28.png"
	img11.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/down_100_0f2821.png",
	img12.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/down_100_28200f.png",
	img13.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/down_50_210f28.png",
	img14.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/down_50_0f2821.png",
	img15.src = "http://rd.joepahl.is/wp-content/themes/_rd/images/new/down_50_28200f.png"
}

/* dotsQueue function */	
function dotsQueue(imageBtn, dir, add, remove, buttonSeq) {
	
	if (dir == 'up') { 
		// console.log(dir + ' ' + add + ' ' + remove + jQuery(imageBtn).attr('src'));
		jQuery(imageBtn).queue(function() {
			jQuery(this).attr('src', buttonSeq[0]);
				jQuery(imageBtn).queue(function() {
					jQuery(this).attr('src', buttonSeq[1]);
						jQuery(imageBtn).queue(function() {
							jQuery(this).attr('src', buttonSeq[2]);
								jQuery(imageBtn).queue(function() {
									jQuery(this).attr('src', buttonSeq[3]);
									
									if (jQuery('body').hasClass(remove));
									
									jQuery('body').addClass(add);
									
									jQuery(this).dequeue();
					            });
				            jQuery(this).dequeue();
				        });
		            jQuery(this).dequeue();
		        });
            jQuery(this).dequeue();
        });	
	
	} else if (dir == 'down') {
		// console.log(dir + ' ' + add + ' ' + remove + jQuery(imageBtn).attr('src'));
		jQuery(imageBtn).queue(function() {
			jQuery(this).attr('src', buttonSeq[0]);
				jQuery(imageBtn).queue(function() {
					jQuery(this).attr('src', buttonSeq[1]);
						jQuery(imageBtn).queue(function() {
							jQuery(this).attr('src', buttonSeq[2]);
																												
							if (remove != '') {
								jQuery('body').removeClass(remove);
							} else {
								if (jQuery('body').hasClass('brown')) {
									jQuery('body').removeClass('brown');
								} else if (jQuery('body').hasClass('purple')) {
									jQuery('body').removeClass('purple');
								} else if (jQuery('body').hasClass('green')) {
									jQuery('body').removeClass('green');
								}
							}

							jQuery('body').addClass(add);
							jQuery('.btn-wrap button').css('cursor','pointer');
							jQuery(this).parent('button').css('cursor','default');
				            jQuery(this).dequeue();
				        });
		            jQuery(this).dequeue();
		        });
            jQuery(this).dequeue();
        });
	}
} /* End dotsQueue function */

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
    	}
	}
}

function queColor(color) {
	jQuery('a[href*="joepahl.is"]').each(function(){
		
		var link = jQuery(this).attr('href');
		var myURL = parseURL(link);
		
		if (myURL.file == '') {
								
			var regexQ = /rd-clr=/i;
					
			if (link.search('#') != -1) {
				var target = link.search('#');
				var anchor = link.substr(target);
				link = link.substr(0, target);
			} else {
				var anchor = '';
			}
			
			if (link.search(regexQ) != -1) {
				link = link.replace(/rd-clr=(brown|purple|green)/i, 'rd-clr='+color);
				jQuery(this).attr('href', link + anchor);
			
			} else {
			
				jQuery(this).attr('href', function(index, href) {
			        var param = 'rd-clr='+color;
					
			        if (link.charAt(link.length - 1) === '?') //Very unlikely
			            return link + param + anchor;
			        else if (link.indexOf('?') > 0)
			            return link + '&' + param + anchor;
			        else
			            return link + '?' + param + anchor;
				});
			}
		}
	});
}

// This function creates a new anchor element and uses location
// properties (inherent) to get the desired URL data. Some String
// operations are used (to normalize results across browsers).
 
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}