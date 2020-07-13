var map;
      function initMap() {
        // Initialise map, centred on Melbourne, Australia.
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -37.8200855, lng: 144.9608045},
                zoom: 17
            });
            
            let infowindow = new google.maps.InfoWindow({
                position: new google.maps.LatLng(-37.9128781,145.1362585),
                content: "Monash Sport", 
                disableAutoPan: true,
            }); 
            
            let infowindow1 = new google.maps.InfoWindow({
                position: new google.maps.LatLng(-37.912641,145.1308405),
                content: "Faculty of Medicine", 
                disableAutoPan: true,
            }); 
            let infowindow2 = new google.maps.InfoWindow({
                position: new google.maps.LatLng(-37.9092552,145.1338553),
                content: "Faculty of Engineering", 
                disableAutoPan: true,
            }); 
            let infowindow3 = new google.maps.InfoWindow({
                position: new google.maps.LatLng(-37.9118667,145.1329004),
                content: "Campus Centre", 
                disableAutoPan: true,
            }); 
            infowindow.open(map);
            infowindow1.open(map);
            infowindow2.open(map);
            infowindow3.open(map);

            let getpath = JSON.parse(localStorage.getItem("savedpath"));// changes to an object so it becomes an array of usable latlng coordinates.
          
            console.log(getpath); //testing to see what it gets

         


             //shows the polyline directions
           var path = new google.maps.Polyline({
               path: getpath,
               geodesic: true,
               stokeColor: '#FF0000',
               strokeOpacity: 1.0,
               StrokeWeight: 2                    
           });
           path.setMap(map);

           var latlng = new google.maps.LatLng(-37.9110467,145.1343136);
            map.panTo(latlng);
      }

         


         
