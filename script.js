

let postsSection = document.getElementById("posts-section");//skapar en sektion för att sedan kunna rensa sidan och skriva ut nytt
let posts = []; //definiera en global variabel som heter posts (skall innehålla alla inlägg)

//fetch hämtar inlägg från dummyjson
fetch("https://dummyjson.com/posts")
  .then((response) => { //Lägger resultatet i variabeln response och är då i json
    if (response.ok) {
      return response.json();//görs om från json till array
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => { // hämtar in array som "görs om" på rad 8 (föregående .then)
    posts = [...data.posts, ...posts]; //kopiara objekt/array (spread operator = punkterna) och lägger ihop dem, så lite som x=x+y   
    printMessage(posts); //funktion som skriver ut det som finns i arrayen
  })
let btn = document.getElementById("btn"); // eventlistener som kännar av om man trycker på knappen.
btn.addEventListener("click", loadMessage); //vid klick, kör loadMessage

//en funktion som sparar det som finns i rutorna till arrayen och sedan (anropar sedan nästa funktion
//som skriver ut arrayerna på nytt, med eventuella nya värden/inlägg)
function loadMessage() {
  //lägger värdena från rutorna i tillhörade variabler
  let title = document.getElementById("titleInput").value; 
  let text = document.getElementById("textInput").value;
  let taggs = document.getElementById("taggsInput").value;

  // "tags" blir en array
  let tags = taggs.split(" ");
  
  //lägger till variablernas värden i arrayen (push för att lägga till sist, unshift för att lägga till först)
  //(push för at lägga in i slutet av arrayen)
  //posts.push({ title: title, body: text, tags: taggs });
  //unshift för att lägga till ibörjan
  posts.unshift({ title: title, body: text, tags: tags });
  printMessage(posts); //skriv ut allt på nytt (printMessage)
}

//funktion som skriver ut det som finns i arrayen
function printMessage(posts) {
  // Töm innehåll
  postsSection.innerText = "";
  //en loop som lägger ut inläggen i arrayen posts
  for (let i = 0; i < posts.length; i++) {
  
    //"ställer in" variablerna 
    let postContainer = document.createElement("li");
    let titelLi = document.createElement("h2");
    let kroppLi = document.createElement("div");
    let taggarLi = document.createElement("div");

    //lägger värdena från posts[i] i respektive variabel
    let titel = posts[i].title;
    let kropp = posts[i].body;
    let tagg = posts[i].tags;

    
    let taggarHash = tagg.map(tag => "#" + tag).join(", "); //lägger till # före en tag resp , mellan tags
    //ger de "inställda" variablerna värden
    titelLi.innerText = titel;
    kroppLi.innerText = kropp;
    taggarLi.innerText = taggarHash;
    
    //skriver ut variablerna enligt inställningar på sidan
    postContainer.append(titelLi, kroppLi, taggarLi); 
    postsSection.append(postContainer);
  }
  
  //suddar ut fälten där man skriver inlägg så de är redo för nästa inlägg
  titleInput.value = "";
  textInput.value = "";
  taggsInput.value = "";
}





