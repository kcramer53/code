// Backend logic






	// UI logic


	$(document).ready(function() {
	  $("form").submit(function(event) {
	    var favoriteVacation = $("#vacation").val();
	    var favoriteCusine = $("input:radio[name=cusine]:checked").val();
	    var favoriteAccomodations = $("input:radio[name=accomodations]:checked").val();
	    var favoriteMApproach = $("input:radio[name=approach]:checked").val();
	    var favoriteRandom = $("input:radio[name=random]:checked").val();


	    if (favoriteVacation === "tropics" && favoriteCusine === "seafood" && favoriteAccomodations === "youth hostel" && favoriteApproach === "visual concept" && favoriteRandom === "i am always on time")) {
	      $('#ruby').show();
	      $('#java, #c++, #python, #no-match').hide();
	    } else if (favoriteVacation === "mountians" && favoriteCusine === "exotic" && favoriteAccomodations === "all inclusive" && favoriteApproach === "demonstration" && favoriteRandom === "i am the life of the party")) {
        $('#java').show();
        $('#ruby, #c++, #python, #no-match').hide();
	    } else if (favoriteVacation === "dessert" && favoriteCusine === "traditional" &&favoriteAccomodations === "hotel" && favoriteApproach === "online" && favoriteRandom === "i never give up on true love")) {
        $('#c++').show();
        $('#java, #ruby, #python, #no-match').hide();
	    } else if (favoriteVacation === "stacation" && favoriteCusine === "meat & taters" &&favoriteAccomodations === "tent" && favoriteApproach === "classroom" && favoriteRandom === "i will be rich some day")) {
        $('#python').show();
        $('#java, #c++, #ruby, #no-match').hide();
	    } else {
        $('#no-match').show();
        $('#java, #c++, #python, #ruby').hide();
	    }


	  event.preventDefault();
	  });
	});
