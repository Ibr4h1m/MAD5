if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then(function(){
            console.log("SW Registered")
    });
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  const london = { lat: 51.509865, lng: -0.118092 };
  const manchester = { lat: 53.483959, lng: -2.244644 };
  const cambridge = { lat: 52.205276, lng: 0.119167 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: london,
  });
  // The marker, positioned at Uluru
  const uluruMarker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
    
  const londonMarker = new google.maps.Marker({
    position: london,
    map: map,
  });
    
  const manchesterMarker = new google.maps.Marker({
    position: manchester,
    map: map,
  });
    
  const cambridgeMarker = new google.maps.Marker({
    position: cambridge,
    map: map,
  });
    
}


function displayMessage(){
    var box = document.getElementById('welcome-box');
    box.innerHTML = '';
    
    var name = document.getElementById('userName').value;
    
    var getName = document.createTextNode(
        "Welcome " + 
        name + 
        " Please report any bugs at www.1k4home.com. Thank you! Ibrahim Abdul | Staffordshire University | " );
    box.appendChild(getName);
};

function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}
