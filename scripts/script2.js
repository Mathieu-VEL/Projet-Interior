let NEWSURL = "https://www.tbads.eu/greta/kercode/ajax/?article=2";
fetch(NEWSURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur : " + response.status);
    }
    console.log("status: " + response.status);
    return response.json();
  })
  .then((data) => news(data))
  .catch((error) => {
    console.log(error.message);
  });
function news(data) {
  const newstitle2 = document.getElementById("news2");
  const newscontent2 = document.getElementById("news2");
  
  if (newstitle2) {
    const title2 = document.createElement("p");
    title2.textContent = data.title;
    newstitle2.appendChild(title2);
  }
  
  if (newscontent2) {
    const content = document.createElement("p");
    content.textContent = data.content[0];
    newscontent2.appendChild(content);
  }
}

// function news(data){
//   console.log(data);
//   console.log(data.title); // 
//   console.log(data.author.name); // 
//   console.log(data.author.surname); // 
//   console.log(data.date.day); // 
//   console.log(data.date.month); // 
//   console.log(data.date.year); // 
//   console.log(data.keyword[0]); // 
//   console.log(data.keyword[1]); // 
//   console.log(data.keyword[2]); // 
//   console.log(data.content[0]); //
//   console.log(data.content[1]); // 
//   console.log(data.picture); // 
// }
