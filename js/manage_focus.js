// first time the header is focuesed it adds an event listener to the element with tabIndex=0 that focuses the header so we can skip the googlemaps elements while tabbing trough the app

$('[tabIndex=1]').focus(function() {
      $('[tabIndex=0]').first().focus(function() {
            $('[tabIndex=1]').focus();
      });
});
