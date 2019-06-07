// Backend logic






	// UI logic


	$(document).ready(function() {
	  $("form").submit(function(event) {
	    var favoriteLanguage = $("#language").val();
	    var favoriteVacation = $("input:radio[name=vacation]:checked").val();
	    var favoriteCusine = $("input:radio[name=cusine]:checked").val();
	    var favoriteAccomodations = $("input:radio[name=acomodations]:checked").val();
      var favoriteApproach = $("input:radio[name=approach]:checked").val();
      var favoriteRandom = $("input:radio[name=random]:checked").val();


	    if (favoriteVacation === "the tropics" && favoriteCusine === "seafood" && favoriteAccomodations === "youth hostel" && favoriteApproach === "visual concept" && favoriteRandom === "i am always on time") {
	      $('#ruby').show();
	      $('#java, #c++, #python, #no-match').hide();
	    } else if (favoriteVacation === "the mountians" && favoriteCusine === "exotic" && favoriteAccomodations === "all inclusive" && favoriteAppraoch === "demonstration" && favoriteRandom === "i am the ife of the party") {
        $('#java').show();
        $('#ruby, #c++, #python, #no-match').hide();
	    } else if (favoriteVacation === "the dessert" && favoriteCusine === "traditionl" && favoriteAccomodations === "hotel" && favoriteVApproach === "online" && favoriteRandom === "i never give up on true love") {
        $('#C++').show();
        $('#java, #ruby, #python, #no-match').hide();
	    } else if (favoriteVacation === "staycation" && favoriteCusine === "meat & taters" && favoriteAccomodations === "tent" && favoriteApproach === "classrom" && favoriteRandom === "i will be rich someday") {
        $('#Python').show();
	      $('#java, #c++, #ruby, #no-match').hide();
	    } else {
        $('#no-match').show();
	      $('#java, #c++, #python, #ruby').hide();
	    }


	  event.preventDefault();
	  });
	});
