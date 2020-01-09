 navigator.geolocation.getCurrentPosition(
        function(position) {
            alert('Координаты вашего местоположения сейчас: ' +
                position.coords.latitude + ", " + position.coords.longitude);
        }
    );

