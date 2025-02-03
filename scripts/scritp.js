let URL = "https://www.tbads.eu/greta/kercode/ajax/?article=1";
fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("super erreur status : " + response.status);
    }
    console.log("status: " + response.status);
    return response.json();
  })
  .then((data) => news(data))
  .catch((error) => {
    console.log(error.message);
  });

  function news(data){
    console.log(data);
    console.log(data.title); // "Ma maison, mon équilibre"
    console.log(data.author.name); // "Dupont"
    console.log(data.author.surname); // "Julie"
    console.log(data.date.day); // 27
    console.log(data.date.month); // "décembre"
    console.log(data.date.year); // 2023
    console.log(data.keyword[0]); // "Nouvelle collection"
    console.log(data.keyword[1]); // "2024"
    console.log(data.keyword[2]); // "Tendance"
    console.log(data.content[0]); // "Nouvelle année, nouvel intérieur ! ..."
    console.log(data.content[1]); // Deuxième élément du tableau content
    console.log(data.picture); // URL de l'image
  }
// function news(data) {
//   const ul = document.getElementById("resultat");
//   const element = document.getElementById("resultat");
//   while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }
//     ul.innerHTML = "";
//   const time = data.daily.time;

//   for (let i = 0; i < time.length; i++) {
//     let li = document.createElement("li");
//     li.textContent =
//       "Date: " +
//       time[i] +
//       " - Max: " +
//       maxtemp[i] +
//       "°C | Min: " +
//       mintemp[i] +
//       "°C";
//     ul.appendChild(li);
//   }

//   console.log(currenttemp);
//   console.log(maxtemp);
//   console.log(mintemp);
//   console.log(time);
// }
