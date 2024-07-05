var questionsHTML = ""; // used to hold all generated html
var idNumber = 0; // used to create different ids for each question that is added to the html of the page


// once json is loaded, transforms into html and adds it to the page
const jsonLoaded = json =>
    {
        // holds content in json file
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });

        
        // loops through each section of json file
        for (var i = 0; i < result.length; i++) {
            
            idNumber +=1;
            
            // creates ID for each section title
            var createID = `${result[i].title}`;
            var newID = createID.split(" ").join("");

            // adds nav buttons that take users to the title of each section
            document.getElementById("navButtonsFaq").innerHTML += `<a href="#${newID}" class="btn btn-info" role="button">${result[i].title}</a>`
            questionsHTML += `<h2 id="${newID}">${result[i].title}</h2> 
            <div class="questionBlock">
            <div class="questions">`;


            // loops through each question & answer in current section of the json and turns it to html
            for (var j = 0; j < result[i].questions.length; j++) {

                idNumber +=1;

                questionsHTML += 
                `
                <div class="card">
                    <div class="card-header" id="heading${idNumber}">
                      <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${idNumber}" aria-expanded="true" aria-controls="collapse${idNumber}">
                        ${result[i].questions[j].question}
                        </button>
                      </h5>
                    </div>
                
                    <div id="collapse${idNumber}" class="collapse" aria-labelledby="heading${idNumber}" data-parent="#accordion">
                        <div class="card-body">    
                        
                            ${result[i].questions[j].answer}
                        </div>
                    </div>
                </div>
                `
                ;
                
            }

            questionsHTML += `</div></div>`
            
        }

        // adds generated html to the page
        document.querySelector(".jsonContent").innerHTML += questionsHTML;  
    }



export {jsonLoaded}
