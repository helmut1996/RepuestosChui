function iniciarMap(){
    var coord = {lat:12.133055  ,lng:  -86.214890};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
$('#myModal').modal({
  keyboard: false
})
  // Galeria
  baguetteBox.run('.tz-gallery');
