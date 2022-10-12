console.log("this is my index.js file for newsapi");

let newsAccordion = document.getElementById("newsAccordion");
//initialize news parameters
let apiKey = "b3732d1f2b404219ad2ab8c69ac8dc67";
//grab the news container
const xhr = new XMLHttpRequest();

//create a get request
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
  true
);

//when response is ready
xhr.onload = function () {
  let json = JSON.parse(this.responseText);
  let articles = json.articles;
  console.log(articles);
  let newsHtml="";
  articles.forEach(function(element,index){
    
    let news = `<div class="accordion" id="newsAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
        
          <b>Breaking news ${index+1}: </b>${element["title"]}
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
        <div class="accordion-body">
          ${element["description"]}. <a href="${element['url']}" target="_blank">Read more here</a>
        </div>
      </div>
    </div>
  </div>`;
  newsHtml+=news;

  }
  );
   
    // console.log(articles[news]);
   
  
newsAccordion.innerHTML=newsHtml;
}
xhr.se  nd();
