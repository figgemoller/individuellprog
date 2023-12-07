// huvudsida för javascript
// från dummyjason för att hämta alla posts
fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(console.log);
console.log(Array[1]);




//let arr=json.parse(text);

//console.log(arr[1]);

/*Ä

for (i=0; i<10; i++) {
    console.log (arr[i]);
}

*/
/*

båda nedan är från boken:

fetch("https://dummyjson.com/posts").then(function (response) {
    // Gör något med response objektet.

  });
  
  // Ibland får man tillbaka data i svaret och då kan den parsas såhär (om det är JSON):
  fetch("url")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.log(jsonObject);
    });
  -----------------------

    fetch("url").then(function (response) {
        // Gör något med response objektet.
      });
      
      // Ibland får man tillbaka data i svaret och då kan den parsas såhär (om det är JSON):
      fetch("https://dummyjson.com/posts")
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonObject) {
          console.log(jsonObject);
        });
  */