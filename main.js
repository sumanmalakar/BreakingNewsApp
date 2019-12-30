console.log("Hello_Console!!");

// 3e27d62a11e8474992095e83a10e3f92

// Initialize the variable
let source = 'bbc-news';
let apiKey = '3e27d62a11e8474992095e83a10e3f92';

// Grab the new container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
      let json =  JSON.parse(this.responseText);
      let articles = json.articles;
    //   console.log(json);
    
    let newsHtml = "";

    articles.forEach(function(element, index) {
        
        // console.log(articles[news]);

        let news = `

<div class="card">
    <div class="card-header" id="heading${index}">
        <h5 class="mb-0">
            <button class="btn btn-link collapsed show" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="true" aria-controls="collapse${index}">
               <b> Breaking News ${index+1}:-</b>
      ${element["title"]}
                        </button>
        </h5>
    </div>

    <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
        data-parent="#newsAccordion">
        <div class="card-body">
           ${element["content"]}.<a href= "${element['url']}" target = "_blank">Read more here</a>
        
                    </div>
    </div>
</div>`;


newsHtml += news;


    });

newsAccordion.innerHTML = newsHtml;

    }
    else {
        console.log("Some error occured");
    }
}
xhr.send();
