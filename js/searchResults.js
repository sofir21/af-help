var searchHTML = "";
var jsonFile;
var idNumber = 0;
var search = "";
var searchResults = 0;

const jsonLoaded = json =>
    {

        console.log("search clicked");

        var result = [];

        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });

        
        searchHTML = " "; // clears old text
        searchResults = 0; //clears search results
        search = document.querySelector("#searchText").value; //gets searchbar text

        if(search == "" || search == null)
        {
            searchHTML += "<p>Please search a valid term.</p>"
            
        }
        else
        {
            searchHTML += `<div id="results">`;
            searchHTML += `<br><p class="font-weight-light">Here are the search results for: <b>'${search}'</b></p>`;

            searchHTML += `<div id="resultsQuestions">`;
            // searchHTML += `<br><br> <p> dsajfhkj dskajhfkjsahfd kjdhfakjdh kjfdsahkjdsah <br> jhfdsajdhfa kjdhfajhf ajdfhakjadshf adsfjkl 
            // <br><br> ajdhfkjdsahfaksjf <br> jakdshfaskjdsafh jdskhfjdsa asjdhfakjsdfh dsajfhakjsh</p>`;
            searchHTML += `<div id="accordion">`;

            for (var i = 0; i < result.length; i++) {
            
                idNumber +=1;
                
    
                var createID = `${result[i].title}`;
                var newID = createID.split(" ").join("");
                console.log(newID);
    
    
                
                for (var j = 0; j < result[i].questions.length; j++) {
                    idNumber +=1;

                    if(result[i].questions[j].question.includes(search) || result[i].questions[j].answer.includes(search))
                    {
                        searchHTML += 
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
                        searchResults +=1;

                    }
                    
                }

            if(searchResults == 0)
            {
                searchHTML = `<p>No results found.</p>`;
            }
    
               
                // console.log(result[i]);
            }
            // searchHTML += `</div></div>`;
        }
        searchHTML += `
        </div>
        </div>
        </div>`
          






        

    


        
           
            console.log()

            document.querySelector("#searchResults").innerHTML = searchHTML;  
    }



export {jsonLoaded}
