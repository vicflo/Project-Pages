(function(window, document, undefined) {
	$('body').flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 19,
		maxFont   : 40,
		fontRatio : 30
	});


	var aChildren = $("#nav h4").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    // console.log(aChildren);
    for (var i = 0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
        // console.log(aArray);
    } // this for loop fills the aArray with attribute href values


    $('#main').scroll(function(){

        var windowPos = $('#main').scrollTop(); // get the offset of main from the top of page
        var windowHeight = $('#main').height(); // get the height of the window
        var docHeight = $(document).height();
 		

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of window
            // console.log(theID);
            var divHeight = $(theID).height(); // get the height of the div in question
            // console.log("div height " + divHeight);
            if (divPos < (divHeight / 3) && divPos > -( 2* divHeight /3)) {
                $("a[href='" + theID + "']").addClass("active");
            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }
 
        if(windowPos + windowHeight == docHeight) {
            if (!$(".contact").hasClass("active")) {
                var navActiveCurrent = $("active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("active");
                $("contact").addClass("nav-active");
            }
        }
   	});


	$('a.about').click(function(event){
		event.preventDefault();
		// $(this).addClass('active');
		$('#main').animate({
    		scrollTop: $('#about').offset().top + $('#main').scrollTop()
    	}, 1000, function() {
		});

	});

	$('a.projects').click(function(event){
		event.preventDefault();
		$('#main').animate({
    		scrollTop: $('#projects').offset().top + $('#main').scrollTop()
    	}, 1000, function() {
		});

	});

	$('a.contact').click(function(event){
		event.preventDefault();
		$('#main').animate({
    		scrollTop: contact = $('#contact').offset().top + $('#main').scrollTop()
    	}, 1000, function() {
		});

	});


    var NUM_TWEETS = 10;
    var INDEX = 0;
    var toCycle = [];

    $(document).ready(function(){
        $.getJSON("http://cearto.com/api/cloudarch?callback=?", function(data){
            // console.log(data);
            if(data !== null){
                if(data.length > NUM_TWEETS){
                    cloudTwitter(data);
                }
            }
        });
    

        function cloudTwitter(data){
            toCycle = getRecent(data);
            cycleTweets(toCycle);
        }

        function getRecent(data){
            var recent = [];
            for(var i = 0; i < data.length; i++){
                if(i <= NUM_TWEETS && data[i].retweet_count === 0){
                    recent.unshift(data[i]);
                }
            }
            return recent;
        }


        var tweetURL = "https://twitter.com/CloudArchStudio/status/";

        function cycleTweets(toCycle){
            $.each(toCycle, function(i, val) {
                setTimeout(function() {
                    $('#cloud-now').fadeOut("slow", function() {
                        // $(this).text(val).fadeIn("slow");
                        var text = val.text;
                        var link = val.id_str;
                        var wholeLink = tweetURL + link;

                        var tag = $('<a/>');
                        tag.attr('href', wholeLink);
                        tag.attr('target','_blank');
                        tag.html(text);

                        // console.log("whole link " + wholeLink);
                        // console.log("text " + text + " link " + link);
                        $(this).html(tag).fadeIn("slow");

                    });
                }, i * 6000);
            });
        }



    });


   

})(this, this.document);
