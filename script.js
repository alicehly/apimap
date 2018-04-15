function initMap () {
    var latlong = {lat:64.402305, lng: -17.302017};
    var location = {lat:73.107598, lng: 55.906140};
    var paris = {lat:48.856614, lng:2.352222};
    
    var map= new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: latlong,
    }); //ends map
    
    var marker = new google.maps.Marker({
        position: latlong,
        map: map
    });
    
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    
    var marker = new google.maps.Marker ({
        position: paris,
        map:map
        
    });
    
    
} //ends function