
var firebaseConfig = {
      apiKey: "AIzaSyCMoJWgAatfoE3AC5esL5HVU4uyxnzwL_o",
      authDomain: "covid-19bot-evys.firebaseapp.com",
      databaseURL: "https://covid-19bot-evys-default-rtdb.firebaseio.com",
      projectId: "covid-19bot-evys",
      storageBucket: "covid-19bot-evys.appspot.com",
      messagingSenderId: "485295483514",
      appId: "1:485295483514:web:79fb8a78cd0d0f8ecb29c3"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names );
      row = "<div class='Room_name' id="+Room_names+" onclick='redrictToRoomName(this.id)' >#" +Room_names +" </div><hr>";
Document.getElementById("output").innerHTML += row;
      //End code
 });})}

getData();

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
      
}
  function addroom ()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
   function redrictToRoomName (name)
   {
         console.log(name);
         localStorage.setItem("room_name", name)
         window.location = "kwitter_page.html";
   }

   function send ()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });

}