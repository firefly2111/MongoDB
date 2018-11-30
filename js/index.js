$(document).ready(function(){
  var url = ""; 
  $("#back").on("click", "button", function(){
     
      $("#result").removeClass("vnresult");
      $("#result").addClass("vtresult");
        $("#back").removeClass("vtback");
      $("#back").addClass("vnback");
      $(".over").removeClass("vtover");
      $(".over").addClass("vnover");
    });
 
  $("#result").off().on("click", ".movies", function(){
      $("#back").html("");
    $("#back").append("<button id='but'>Back</button>")
    $(this).clone().appendTo("#back");
      
    $("#result").removeClass("vtresult")
      $("#result").addClass("vnresult");
    $("#back").addClass("vtback");
    $(".over").removeClass("vnover");
    $(".over").addClass("vtover");
    });
  
$("#movie").off().on("click",function(){

  $("#result").html("");
  
  url = "https://api.themoviedb.org/3/movie/top_rated?api_key=72dd6fd046af43945d3cd30db5e1d901";
  
  $.getJSON(url, function(data){
    for(var i = 0;i < 10;i++){
     $("#result").append('<div class="movies"><img src="https://image.tmdb.org/t/p/w500/'+data.results[i].poster_path + '"></img><h1>' + data.results[i].title + '</h1><p class="over vnover">' + data.results[i].overview + '</p></div>')
    }
  });
  
  url = ""; 
  
  $("#input").off().keyup(function(){
    url = "https://api.themoviedb.org/3/search/movie?api_key=72dd6fd046af43945d3cd30db5e1d901&query=";
  $("#result").html("");
  var vrednost = $("#input").val();

  var urls = url + vrednost ;

   $.getJSON(urls, function(data){
     for(var i = 0;i < data.results.length;i++){
       
        $("#result").append('<div class="movies"><img src="https://image.tmdb.org/t/p/w500/'+data.results[i].poster_path + '"><h1 class="text">'+ data.results[i].title +'</h1><p class="over vnover">'+ data.results[i].overview + '</p></div>');
        }
      });
   });
  });
  
$("#tv").off().on("click",function(){
  
  $("#result").html("");
  url = "https://api.themoviedb.org/3/tv/top_rated?api_key=72dd6fd046af43945d3cd30db5e1d901";
  
  $.getJSON(url, function(data){
    for(var i = 0;i < 10;i++){
     $("#result").append('<div class="movies"><img src="https://image.tmdb.org/t/p/w500/'+data.results[i].poster_path + '"></img><h1>' + data.results[i].original_name + '</h1><p class="over vnover">' +  data.results[i].overview + '</p></div>'); 
    }
  });
  
  url = "";
  
  $("#input").off().keyup(function(){
    url = "https://api.themoviedb.org/3/search/tv?api_key=72dd6fd046af43945d3cd30db5e1d901&query=";
  $("#result").html("");
  var vrednost = $("#input").val();

  var urls = url + vrednost ;

   $.getJSON(urls, function(data,j){
     for(var i = 0;i < data.results.length;i++){
       
        $("#result").append('<div class="movies"><img src="https://image.tmdb.org/t/p/w500/'+data.results[i].poster_path + '"><h1>'+ data.results[i].original_name +'</h1><p class="over vnover">'+ data.results[i].overview+'</p></div>');
       }
      });
   });
});
  
});
