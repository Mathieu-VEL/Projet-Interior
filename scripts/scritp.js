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

function news(data) {
  const newstitle1 = document.getElementById("news1");
  const newscontent1 = document.getElementById("news1");
  
  if (newstitle1) {
    const title1 = document.createElement("p");
    title1.textContent = data.title;
    newstitle1.appendChild(title1);
  }
  
  if (newscontent1) {
    const content = document.createElement("p");
    content.textContent = data.content[0];
    newscontent1.appendChild(content);
  }
}

// function news(data){
//   console.log(data);
//   console.log(data.title); // "Ma maison, mon équilibre"
//   console.log(data.author.name); // "Dupont"
//   console.log(data.author.surname); // "Julie"
//   console.log(data.date.day); // 27
//   console.log(data.date.month); // "décembre"
//   console.log(data.date.year); // 2023
//   console.log(data.keyword[0]); // "Nouvelle collection"
//   console.log(data.keyword[1]); // "2024"
//   console.log(data.keyword[2]); // "Tendance"
//   console.log(data.content[0]); // "Nouvelle année, nouvel intérieur ! ..."
//   console.log(data.content[1]); // Deuxième élément du tableau content
//   console.log(data.picture); // URL de l'image
// }
