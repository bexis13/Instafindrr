var currentUser="";
var latestPhoto;



//loads justin bieber images, on page onload automatically
$(document).ready(function () {
  var image="";
    var URL = "http://whateverorigin.org/get?url=" + encodeURIComponent("https://instagram.com/justinbieber/media");
    currentUser = "justinbieber";
 $.ajax({
        url: URL,
        dataType: "jsonp",
        cache: false,
        success: function (response) {
             var data = response.contents;
            for (var i = 0; i < data.items.length; i++) {

                 image += '<img src="'+data.items[i].images.standard_resolution.url+'" alt="" />';
               
            }
            $(image).appendTo(".images");
             $("#userImages").show( "slow", function(){});
            latestPhoto = data.items[0].images.standard_resolution.url;
        },
        error: function () {
            var error = "<p>error processing ajax request</p>";
            $(error).appendTo(".images");
            
        }
})

})
//////////////


// search for new users

      function search(){
     var value = $("#search").val();
      currentUser = value;
      
       $("#userImages").empty();

      var URL = "http://whateverorigin.org/get?url=" + encodeURIComponent("http://instagram.com/" + value + "/media");

 $.ajax({
        url: URL,
        dataType: "jsonp",
        cache: false,
        success: function (response) {
             var data = response.contents;
            for (var i = 0; i < data.items.length; i++) {
                var image = '<img src="'+data.items[i].images.standard_resolution.url+'" alt="" />';
                $(image).appendTo(".images");

        $("#userImages").show( "slow", function(){});
            }
            latestPhoto = data.items[0].images.standard_resolution.url;
        },
        error: function () {
            var error = "<p>error processing ajax request</p>";
            $(error).appendTo(".images");
        }
})


}
/////

///trigger the search function when enter key is pressed

  $("input").keyup(function(event){
        if (event.which == 13){

          search();
}
})  
///

////realtime updates
function realTime(){
  var value = currentUser;
  var URL = "http://whateverorigin.org/get?url=" + encodeURIComponent("http://instagram.com/" + value + "/media");

 $.ajax({
        url: URL,
        dataType: "jsonp",
        cache: false,
        success: function (response) {
             var data = response.contents;
            
            
            if (data.items[0].images.standard_resolution.url !== latestPhoto){
                   $("#userImages").empty();
                   for (var i = 0; i < data.items.length; i++) {
                var image = '<img src="'+data.items[i].images.standard_resolution.url+'" alt="" />';
                $(image).appendTo(".images");

        $("#userImages").show( "slow", function(){});
            }
            latestPhoto = data.items[0].images.standard_resolution.url;
        }

            

        },
        error: function () {
            console.log(error);
        }
})

}


setInterval(realTime, 5000);












