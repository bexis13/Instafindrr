
$(document).ready(function () {
    var URL = "http://whateverorigin.org/get?url=" + encodeURIComponent("http://instagram.com/justinbieber/media");

 $.ajax({
        url: URL,
        dataType: "jsonp",
        cache: false,
        success: function (response) {
             var data = response.contents;
            for (var i = 0; i < data.items.length; i++) {
                var image = '<img src="'+data.items[i].images.standard_resolution.url+'" alt="" />';
                $(image).appendTo(".images");
            }
        },
        error: function () {
            var error = "<p>error processing ajax request</p>";
            $(error).appendTo(".images");
            
        }
})

})


      function search(){
     var value = $("#search").val();
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
        },
        error: function () {
            var error = "<p>error processing ajax request</p>";
            $(error).appendTo(".images");
        }
})


}



  $("input").keyup(function(event){
        if (event.which == 13){

          
    search();

}
})  



