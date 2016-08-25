var people = [];
var currentIndex = 0;

  $(document).ready(function(){
    loadData();

    $('#next').on('click', nextPerson);
    $('#prev').on('click', prevPerson);
    
    function nextPerson () {
      currentIndex++;
      if (currentIndex >= people.length) {
         currentIndex = 0;
    }

    showPerson();
    updateTracker();
  }


    function prevPerson () {
       currentIndex--;
       if (currentIndex < 0) {
         currentIndex = 1;
       }
       showPerson ();
       updateTracker();
    }


    function showPerson () {
      var person = people[currentIndex];
      var gitLink = "https://github.com" + person.git_username;
      $("#person-name").text(person.name);
      $("#person-shoutout").text(person.shoutout);
      $("#person-git").attr("href", gitLink + person.git_username);
    }




   //console.log('This is my ' + data);
      console.log("clicked");

  });
  $('#prev').on('click', function () {
      console.log("clicked");
  });
  function loadData() {
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){   //fetches the data from server
         people = data.omicron;
         showPerson();
         createTracker();
      },
     error: function () {
        console.log('Error with request');    //displays error if data request cannot be fulfilled.
      }

    });
}
function createTracker () {
  people.forEach (function (persion, i) {
    $("#tracker-container").append("<li>" + i  + "</li>")
    $("#tracker-container").children().last().data("index", i);
  });
  updateTracker();
}

function updateTracker () {
  $("#tracker-container").children().each(function(i, item) {
    if($(this).data("index") == currentIndex) {
      $(this).addClass("current");
    }
    else {
      $(this).removeClass("current");
    }
  })



};













// people = omicron
// git_username:
// name:
// shoutout:
