/*Модальное окно*/
var link = document.querySelector("#feedback");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".btn-close");

var username = popup.querySelector("[name=feedback-name]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-feedback-show");
  username.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-feedback-show");
});



window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
    }
  }
});

/*Интерактивная карта*/
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: {lat: 59.93846771, lng: 30.32543292}
  });

  var image = "img/map-pin.png";
  var iceMarker = new google.maps.Marker({
    position: {lat: 59.93856848, lng: 30.32303502},
    map: map,
    icon: image
  });
}
