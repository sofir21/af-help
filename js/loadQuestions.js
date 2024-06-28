var questionsHTML = "";
var jsonFile;
var idNumber = 0;

const jsonLoaded = json =>
    {
        var result = [];

        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });

        
        
        
        for (var i = 0; i < result.length; i++) {
            
            idNumber +=1;
            

            var createID = `${result[i].title}`;
            var newID = createID.split(" ").join("");
            console.log(newID);

            // adds nav buttons
            document.getElementById("navButtonsFaq").innerHTML += `<a href="#${newID}" class="btn btn-info" role="button">${result[i].title}</a>`
            questionsHTML += `<h2 id="${newID}">${result[i].title}</h2> 
            <div class="questionBlock">
            <div class="questions">`;


            
            for (var j = 0; j < result[i].questions.length; j++) {
                idNumber +=1;
                console.log(idNumber);
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

            questionsHTML += `
            </div>
            </div>`
            
            // console.log(result[i]);
            }
           
            console.log()

            document.querySelector(".jsonContent").innerHTML += questionsHTML;  
    }



export {jsonLoaded}
