(function(window, document, undefined) {

// aligns picture for THIS section
  var position = $("h1").position();
  var padding = 10;
  var left = position.left + padding;
  var top = position.top + padding;
  $("h1").find("span").css("background-position","-"+left+"px -"+top+"px"); 

  var sections = document.getElements


  function setHeight() {
    var docHeight = $(window).height();
    var newHeight = docHeight - $('#nav').outerHeight();
    var temp = $('#nav').outerHeight();
    $('#intro').css('height', newHeight);
    $('#rsvp').css('height', newHeight);
    $('#particpate').css('height', newHeight);
    $('#extra').css('height', newHeight);

    console.log("called");
  };

  setHeight(); //initially called
  
 
  $('a').click(function(event){
    event.preventDefault();
  
    var name =  this.className;
    var sections = document.getElementsByTagName('section');
    var mySection = null;
    for(var i = 0; i < sections.length; ++i) {
      if(sections[i].id === name) {
        var toShow = sections[i];
      }
    sections[i].style.display = "none";
    }  
    var $obj = $(toShow);
    $obj.fadeIn( "slow" );

  });

  $('#button').mouseover(function() { 
          $(this).attr("src", "includes/button-on.png");
  }); 
  $('#button').mouseout(function() {
         $(this).attr("src", "includes/button.png");
  });

  $('#button').click(function(){
    window.open("https://docs.google.com/forms/d/1gUOTOIVTIdHXJjCcxMawkeEWRFEGqa6IPMbd2xgSFPY/viewform?edit_requested=true",'_blank');
  });

   $('#up-button').mouseover(function() { 
          $(this).attr("src", "includes/upload-on.png");
  }); 
  $('#up-button').mouseout(function() {
         $(this).attr("src", "includes/upload.png");
  });

  $('#up-button').click(function(){
    window.open("https://www.dropbox.com/request/oST2nyI2uSzba8Rr0mFS",'_blank');
  });

  $(window).scroll( function(){
    $('.fadeInBlock').each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 200;  
      
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);     
        }
    }); 
  });


})(this, this.document);
