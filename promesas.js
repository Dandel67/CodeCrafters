fetch("/url").then(function(response) {
    /* Código a realizar cuando se cumpla la promesa */
  });

  fetch("127.0.0.1:5000").then(function(response) {
    /* Código a realizar cuando se cumpla la promesa */
  });


  fetch("/url")
  .then(function(response) {
    /* Código a realizar cuando se cumpla la promesa */
  })
  .catch(function(error) {
    /* Código a realizar cuando se rechaza la promesa */
  });

  fetch("/url")
  .then(response => {
    return response.text(); // Devuelve una promesa
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => { /* Código a realizar cuando se rechaza la promesa */ });


