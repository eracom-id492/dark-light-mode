

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  // console.log(request);
  fetchEvent.respondWith(
    // new Response('Hello, World!')
    fetch(request)
      .then(responseFromFetch => {
        return responseFromFetch;
      }) // end fetch then
      .catch(error => {
        return new Response(
          '<h1>Oops!</h1> <p>Something went wrong.</p>',
          {
            headers: {'Content-type': 'text/html; charset=utf-8'}
          }
        );
      }) // end fetch catch
  ); // end respondWith
}); // end addEventListener