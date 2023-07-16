// Update the route without page reload
function changeRoute(route) {
  window.history.pushState({ route: route }, '', route);
  handleRouteChange();
}

// Handle route change
function handleRouteChange() {
  var currentRoute = window.location.pathname;

  // Update the content based on the current route
  switch (currentRoute) {
    case '/home':
      // Load the home page content
      break;
    case '/about':
      // Load the about page content
      break;
    case '/contact':
      // Load the contact page content
      break;
    // Add more routes and their respective content
  }
}

// Listen for the popstate event
window.addEventListener('popstate', function (event) {
  handleRouteChange();
});

document.querySelector('#about').addEventListener('click', function () {
  // Example usage
  changeRoute('/about'); // Update the route to '/about'
});
