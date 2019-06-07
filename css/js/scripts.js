// Backend logic






	// UI logic


	$(document).ready(function() {
	  $("form").submit(function(event) {
	    var favoriteCelebrity = $("#celebrity").val();
	    var favoriteColor = $("input:radio[name=color]:checked").val();
	    var favoriteFood = $("input:radio[name=food]:checked").val();
	    var favoriteMovieTv = $("input:radio[name=movie-tv]:checked").val();
	    var favoriteVacation = $("input:radio[name=vacation]:checked").val();


	    if (favoriteColor === "green" && favoriteFood === "sushi" && favoriteMovieTv === "notebook" && favoriteVacation === "bali") {
	      $('#ryan').show();
	      $('#woody, #kathy, #jamie, #no-match').hide();
	      // $('#kathy').hide();
	      // $('#jamie').hide();
	      // $('#no-match').hide();
	    } else if (favoriteColor === "red" && favoriteFood === "pizza" && favoriteMovieTv === "cheers" && favoriteVacation === "mexico") {
	      $('#woody').show();
	      $('#ryan').hide();
	      $('#kathy').hide();
	      $('#jamie').hide();
	      $('#no-match').hide();
	    } else if (favoriteColor === "blue" && favoriteFood === "cheeseburger" && favoriteMovieTv === "misery" && favoriteVacation === "switzerland") {
	      $('#kathy').show();
	      $('#ryan').hide();
	      $('#woody').hide();
	      $('#jamie').hide();
	      $('#no-match').hide();
	    } else if (favoriteColor === "purple" && favoriteFood === "fried-chicken" && favoriteMovieTv === "sense8" && favoriteVacation === "tahiti") {
	      $('#jamie').show();
	      $('#ryan').hide();
	      $('#woody').hide();
	      $('#kathy').hide();
	      $('#no-match').hide();
	    } else {
	      $('#no-match').show();
	      $('#jamie').hide();
	      $('#ryan').hide();
	      $('#woody').hide();
	      $('#kathy').hide();
	    }


	  event.preventDefault();
	  });
	});
