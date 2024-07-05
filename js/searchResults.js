var searchHTML = "";
var aboveSearchHTML = "";
var bellowSearchHTML = "";
var jsonFile;
var idNumber = 0;
var search = "";
var searchResults = 0;

const jsonLoaded = json =>
    {


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
            aboveSearchHTML = "";
            aboveSearchHTML += `<div id="results">`;
            aboveSearchHTML += `<p class="font-weight-light">Here are the search results for: <b>'${search}'</b></p>`;

            searchHTML += `<div id="resultsQuestions">`;
            searchHTML += `<div id="accordion">`;

            for (var i = 0; i < result.length; i++) 
            {
            
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
            }

        searchHTML += `
        
        </div>`;
        }

        

        if(searchResults == 0)
        {
                searchHTML = "";
                bellowSearchHTML ="";
                aboveSearchHTML = "";
                
                searchHTML += `<div id="results">`;
                searchHTML += `<p class="font-weight-light">No results found for: <b>'${search}'</b></p></div>`;

                searchHTML += `<div id="resultsQuestions">`;
                searchHTML +=`<p class="font-weight-light"><br>Please make sure to only search for key terms.<br> For example, instead of searching "How do I join a team?" search for: "join" or "team".<br><br>If you've tried searching by terms multiple times and still can't find anything regarding your question, please <a href="https://artfight.net/info/contact-us">contact a moderator.</a></p>`;
                searchHTML += `</div>`;

        }
        
        if(searchResults != 0)
        {
            aboveSearchHTML += `<p class="font-weight-light">Showing <b>'${searchResults}'</b> results.</p> </div>`;
        }

        bellowSearchHTML += `</div>`;

        document.querySelector("#searchResults").innerHTML = aboveSearchHTML;  
        document.querySelector("#searchResults").innerHTML += searchHTML;  
        document.querySelector("#searchResults").innerHTML += bellowSearchHTML;  

    }



export {jsonLoaded}
