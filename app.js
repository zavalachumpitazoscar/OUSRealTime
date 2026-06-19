navigator.geolocation.watchPosition(

(position)=>{

    document.getElementById("estado").innerHTML =
    "Lat: " + position.coords.latitude +
    "<br>Lng: " + position.coords.longitude;

},

(error)=>{
    alert("Error GPS");
}

);
