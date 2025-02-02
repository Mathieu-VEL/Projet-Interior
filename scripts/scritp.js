fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Erreur :", error));

  

  