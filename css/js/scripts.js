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


	    if (favoriteVacation === "tropics" && favoriteCusine === "seafood" && favoriteAccomodations === "youth hostel" && favoriteApproach === "visual concept" && favoriteRandom === "i am always on time") {
	      $('#ruby').show();
	      $('#java, #c++, #python, #no-match').hide();
	    } else if (favoriteVacation === "red" && favoriteCusine === "pizza" && favoriteAccomodations === "cheers" && favoriteAppraoch === "mexico" && favoriteRandom === "i am the ife of the party") {
        $('#ruby').show();
        $('#java, #c++, #python, #no-match').hide();
	    } else if (favoriteVacation === "blue" && favoriteCusine === "cheeseburger" && favoriteAccomodations === "misery" && favoriteVApproach === "switzerland" && favoriteRandom === "i never give up on true love") {
        $('#ruby').show();
        $('#java, #c++, #python, #no-match').hide();
	    } else if (favoriteVacation === "purple" && favoriteCusine === "fried-chicken" && favoriteAccomodations === "sense8" && favoriteApproach === "tahiti" && favoriteRandom === "i will be rich someday") {
        $('#ruby').show();
	      $('#java, #c++, #python, #no-match').hide();
      } else if (favoriteVacation === "purple" && favoriteCusine === "fried-chicken" && favoriteAccomodations === "sense8" && favoriteApproach === "tahiti" && favoriteRandom === "i am always on time") {
        $('#ruby').show();
        $('#java, #c++, #python, #no-match').hide();
	    } else {
        $('#ruby').show();
	      $('#java, #c++, #python, #no-match').hide();
	    }


	  event.preventDefault();
	  });
	});
