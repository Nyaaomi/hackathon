function initMap() {

    /*Marker*/
    const markers = {
        locationName: 'Stoop Sale',
        lat: 40.679493,
        lng:-73.997369,
        address: '2nd Pl & Court St, <br> Brooklyn'};
    

    const centerMap = { lat: 40.6795092, lng: -73.9979245 };

    /*const MarkerPin = "https://icons8.com/icon/cGhnC1ms9qHp/map-pin"*/

    /*Center Map*/
    const mapOptions = {
        center: centerMap,
        zoom: 17,
        disableDefaultUI:true
    };

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const infoWindow = new google.maps.InfoWindow({
        minWidth:200,
        maxWidth: 200
    });

    const marker = new google.maps.Marker({
        position: {lat: markers['lat'],lng:markers['lng']},
        map: map
        /*icon: MarkerPin*/

    });

    function createInfoWindows(){
        const infoWindowContent = `
        <div class="info-content"><h3>${markers.locationName}</h3>
            <p>${markers.address}</p></div>`;

        google.maps.event.addListener(marker, 'click',function() {
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map,marker);
        });
    }

    createInfoWindows();


}
