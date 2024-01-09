
//function addUser() {
  //player1_name = document.getElementById("player1_name_input").value;
  //player2_name = document.getElementById("player2_name_input").value;

  //localStorage.setItem("player1_name_input",player1_name);
  //localStorage.setItem("player2_name_input",player2_name);


    // only thsi is a commentSet "player1_name" using localStorage.setItem() function
	  //only thsi is a commentSet "player2_name" using localStorage.setItem() function

    //window.location = "game_page_2.html";
//}
function addUser(){
  player1_name =document.getElementById("player1_name_input").value;
  player2_name =document.getElementById("player2_name_input").value;

  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player2_name", player2_name);
  window.location = "game_page_2.html";
}

